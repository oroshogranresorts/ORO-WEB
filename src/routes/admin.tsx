import { createFileRoute } from "@tanstack/react-router";
import { useState, useRef } from "react";
import {
  RoomListing,
  useLiveRooms,
  saveRoom,
  deleteRoom,
  seedInitialRooms,
  DEFAULT_ROOM_LISTINGS,
} from "@/lib/room-listings";
import { uploadToCloudinary } from "@/lib/cloudinary";
import { toast } from "sonner";
import {
  Lock,
  Plus,
  Trash2,
  Upload,
  RefreshCw,
  LogOut,
  Save,
  CheckCircle,
  Eye,
  Image as ImageIcon,
  DollarSign,
  Bed,
  Layers,
  Sparkles,
} from "lucide-react";

export const Route = createFileRoute("/admin")({
  head: () => ({
    meta: [
      { title: "Oro Shogran — Room Management Admin Dashboard" },
      { name: "robots", content: "noindex, nofollow" },
    ],
  }),
  component: AdminDashboard,
});

const DEFAULT_PASSWORD = "oro@admin";

function AdminDashboard() {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    if (typeof window !== "undefined") {
      return sessionStorage.getItem("oro_admin_auth") === "true";
    }
    return false;
  });
  const [pinInput, setPinInput] = useState("");
  const [pinError, setPinError] = useState(false);

  const { rooms, loading } = useLiveRooms();
  const [editingRoom, setEditingRoom] = useState<RoomListing | null>(null);
  const [managingPhotosRoom, setManagingPhotosRoom] = useState<RoomListing | null>(null);
  const [isAddingNew, setIsAddingNew] = useState(false);
  const [uploadingSlug, setUploadingSlug] = useState<string | null>(null);
  const [savingSlug, setSavingSlug] = useState<string | null>(null);
  const [seeding, setSeeding] = useState(false);

  // New room state
  const [newRoom, setNewRoom] = useState<RoomListing>({
    slug: "",
    name: "",
    price: "15,000.00",
    image: "",
    images: [],
    beds: "King Bed",
    size: "Spacious",
    blurb: "Comfortable room with beautiful mountain views.",
    tag: "Featured",
    view: "Mountain View",
    features: [
      "King Size Bed",
      "Attached Bathroom",
      "Complimentary Breakfast for 2",
      "24/7 Hot Water",
      "Secure Parking",
    ],
  });

  const fileInputRef = useRef<HTMLInputElement>(null);
  const newRoomFileRef = useRef<HTMLInputElement>(null);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_PASSWORD) {
      sessionStorage.setItem("oro_admin_auth", "true");
      setIsAuthenticated(true);
      setPinError(false);
      toast.success("Welcome to Oro Shogran Admin Dashboard!");
    } else {
      setPinError(true);
      toast.error("Incorrect password. Please try again.");
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem("oro_admin_auth");
    setIsAuthenticated(false);
    toast.info("Logged out successfully.");
  };

  const handleSeed = async () => {
    try {
      setSeeding(true);
      await seedInitialRooms();
      toast.success("Initial rooms seeded successfully to Firebase!");
    } catch (err: any) {
      toast.error("Failed to seed rooms: " + err.message);
    } finally {
      setSeeding(false);
    }
  };

  const handleQuickPriceUpdate = async (room: RoomListing, newPrice: string) => {
    try {
      setSavingSlug(room.slug);
      const updated = { ...room, price: newPrice };
      await saveRoom(updated);
      toast.success(`Price for "${room.name}" updated to ₨ ${newPrice}!`);
    } catch (err: any) {
      toast.error("Failed to save price: " + err.message);
    } finally {
      setSavingSlug(null);
    }
  };

  const handleSaveRoom = async (room: RoomListing) => {
    try {
      setSavingSlug(room.slug);
      await saveRoom(room);
      toast.success(`"${room.name}" saved successfully! Live website updated.`);
      setEditingRoom(null);
    } catch (err: any) {
      toast.error("Error saving room: " + err.message);
    } finally {
      setSavingSlug(null);
    }
  };

  const handleDeleteRoom = async (slug: string, name: string) => {
    if (!confirm(`Are you sure you want to delete "${name}"? This cannot be undone.`)) {
      return;
    }
    try {
      await deleteRoom(slug);
      toast.success(`"${name}" deleted successfully.`);
      if (editingRoom?.slug === slug) setEditingRoom(null);
    } catch (err: any) {
      toast.error("Error deleting room: " + err.message);
    }
  };

  // Upload image to Cloudinary and append to room
  const handleUploadImage = async (room: RoomListing, file: File) => {
    try {
      setUploadingSlug(room.slug);
      toast.info("Uploading photo to Cloudinary...");
      const url = await uploadToCloudinary(file);
      const updatedImages = [...room.images, url];
      const updated: RoomListing = {
        ...room,
        image: room.image || url,
        images: updatedImages,
      };
      await saveRoom(updated);
      toast.success("New photo uploaded and room updated live!");
    } catch (err: any) {
      toast.error("Upload failed: " + err.message);
    } finally {
      setUploadingSlug(null);
    }
  };

  // Remove single image from room
  const handleRemoveImage = async (room: RoomListing, imgIndex: number) => {
    if (!confirm("Are you sure you want to delete this photo from the website?")) return;
    try {
      const currentList = room.images && room.images.length > 0 ? room.images : (room.image ? [room.image] : []);
      const updatedImages = currentList.filter((_, i) => i !== imgIndex);
      const updated: RoomListing = {
        ...room,
        image: updatedImages[0] || "",
        images: updatedImages,
      };
      await saveRoom(updated);
      toast.success("Photo deleted successfully! Live website updated.");
    } catch (err: any) {
      toast.error("Failed to remove photo: " + err.message);
    }
  };

  const handleSetCoverImage = async (room: RoomListing, imgIndex: number) => {
    try {
      const currentList = room.images && room.images.length > 0 ? [...room.images] : (room.image ? [room.image] : []);
      if (imgIndex < 0 || imgIndex >= currentList.length) return;
      const [selected] = currentList.splice(imgIndex, 1);
      currentList.unshift(selected);
      const updated: RoomListing = {
        ...room,
        image: selected,
        images: currentList,
      };
      await saveRoom(updated);
      toast.success("Set as main cover photo!");
    } catch (err: any) {
      toast.error("Failed to set cover photo: " + err.message);
    }
  };

  const handleAddImageUrl = async (room: RoomListing) => {
    const url = prompt("Enter or paste Image URL:");
    if (!url || !url.trim()) return;
    try {
      const currentList = room.images && room.images.length > 0 ? room.images : (room.image ? [room.image] : []);
      const updatedImages = [...currentList, url.trim()];
      const updated: RoomListing = {
        ...room,
        image: room.image || url.trim(),
        images: updatedImages,
      };
      await saveRoom(updated);
      toast.success("Image added successfully!");
    } catch (err: any) {
      toast.error("Failed to add image: " + err.message);
    }
  };

  const handleCreateRoom = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!newRoom.name.trim()) {
      return toast.error("Please provide a room name.");
    }
    const slug =
      newRoom.slug.trim() ||
      newRoom.name
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, "-")
        .replace(/(^-|-$)/g, "");

    const toSave: RoomListing = {
      ...newRoom,
      slug,
      image: newRoom.images[0] || "/oro/rooms/deluxe/1.jpg",
      order: rooms.length + 1,
    };

    try {
      setSavingSlug("new");
      await saveRoom(toSave);
      toast.success(`"${toSave.name}" added successfully!`);
      setIsAddingNew(false);
      setNewRoom({
        slug: "",
        name: "",
        price: "15,000.00",
        image: "",
        images: [],
        beds: "King Bed",
        size: "Spacious",
        blurb: "Comfortable room with beautiful mountain views.",
        tag: "Featured",
        view: "Mountain View",
        features: ["King Bed", "Attached Bathroom", "Complimentary Breakfast for 2"],
      });
    } catch (err: any) {
      toast.error("Failed to add room: " + err.message);
    } finally {
      setSavingSlug(null);
    }
  };

  // Login Screen
  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#0e0e0e] text-[#f4efe6] flex items-center justify-center p-4">
        <div className="max-w-md w-full bg-[#181818] border border-[#d4a94a]/30 p-8 rounded-lg shadow-2xl">
          <div className="text-center mb-6">
            <div className="inline-flex p-3 rounded-full bg-[#d4a94a]/10 text-[#d4a94a] mb-3">
              <Lock className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-serif text-[#d4a94a] font-bold tracking-wide">
              ORO SHOGRAN
            </h1>
            <p className="text-xs uppercase tracking-[0.25em] text-gray-400 mt-1">
              Admin Control Panel
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-gray-400 mb-2">
                Admin Password
              </label>
              <input
                type="password"
                value={pinInput}
                onChange={(e) => setPinInput(e.target.value)}
                placeholder="Enter password"
                className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] text-center text-lg tracking-wider px-4 py-3 rounded text-white outline-none transition-colors"
                autoFocus
              />
              {pinError && (
                <p className="text-xs text-red-400 mt-2 text-center">
                  Incorrect password. Please try again.
                </p>
              )}
            </div>

            <button
              type="submit"
              className="w-full bg-[#d4a94a] hover:bg-[#e6be60] text-black font-semibold uppercase tracking-wider text-xs py-3 rounded transition-colors shadow-lg"
            >
              Sign In
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0e0e0e] text-[#f4efe6]">
      {/* Top Bar */}
      <header className="border-b border-[#d4a94a]/20 bg-[#141414] sticky top-0 z-40 px-6 py-4">
        <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-3 h-3 rounded-full bg-emerald-500 animate-pulse" />
            <div>
              <h1 className="font-serif text-lg font-bold text-[#d4a94a] tracking-wide">
                ORO SHOGRAN — Room Manager
              </h1>
              <p className="text-[10px] uppercase tracking-wider text-gray-400">
                Live Cloud Sync · Firebase & Cloudinary
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <a
              href="/rooms"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs border border-[#d4a94a]/40 hover:border-[#d4a94a] text-[#d4a94a] px-3 py-2 rounded transition-colors"
            >
              <Eye className="w-3.5 h-3.5" /> View Live Site
            </a>

            <button
              onClick={handleSeed}
              disabled={seeding}
              className="inline-flex items-center gap-2 text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-3 py-2 rounded transition-colors"
              title="If your database is empty, click this to upload default rooms"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${seeding ? "animate-spin" : ""}`} />
              {seeding ? "Syncing..." : "Sync Default Rooms"}
            </button>

            <button
              onClick={handleLogout}
              className="inline-flex items-center gap-2 text-xs bg-red-900/40 hover:bg-red-900/70 text-red-300 px-3 py-2 rounded transition-colors"
            >
              <LogOut className="w-3.5 h-3.5" /> Logout
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-6 py-8">
        {/* Banner */}
        <div className="bg-[#181818] border border-[#d4a94a]/20 rounded-lg p-6 mb-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div>
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Sparkles className="w-5 h-5 text-[#d4a94a]" /> Manage Rooms & Prices
            </h2>
            <p className="text-sm text-gray-400 mt-1">
              Changes saved here appear <strong>instantly on the live website</strong>. No redeploying needed!
            </p>
          </div>

          <button
            onClick={() => setIsAddingNew(true)}
            className="inline-flex items-center gap-2 bg-[#d4a94a] hover:bg-[#e6be60] text-black font-semibold text-xs uppercase tracking-wider px-5 py-3 rounded transition-colors shadow-lg shrink-0"
          >
            <Plus className="w-4 h-4" /> Add New Room
          </button>
        </div>

        {/* Loading status */}
        {loading && (
          <div className="text-center py-16 text-gray-400">
            <RefreshCw className="w-8 h-8 animate-spin mx-auto text-[#d4a94a] mb-3" />
            <p>Loading rooms from Firebase...</p>
          </div>
        )}

        {/* Room Cards Grid */}
        <div className="space-y-8">
          {rooms.map((room) => {
            const isSaving = savingSlug === room.slug;
            const isUploading = uploadingSlug === room.slug;

            return (
              <div
                key={room.slug}
                className="bg-[#161616] border border-gray-800 hover:border-[#d4a94a]/40 rounded-xl p-6 transition-all shadow-xl"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  {/* Left Column: Photos */}
                  <div className="lg:col-span-5 space-y-4">
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-gray-800">
                      <span className="text-xs uppercase tracking-wider text-[#d4a94a] font-semibold flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4" /> Photos ({room.images?.length || (room.image ? 1 : 0)})
                      </span>

                      <div className="flex items-center gap-2">
                        {/* Upload Photo Button */}
                        <label className="cursor-pointer inline-flex items-center gap-1.5 text-xs bg-[#d4a94a] hover:bg-[#e6be60] text-black font-semibold px-3 py-1.5 rounded transition-colors shadow">
                          <Upload className="w-3.5 h-3.5" />
                          {isUploading ? "Uploading..." : "Upload Photo"}
                          <input
                            type="file"
                            accept="image/*"
                            className="hidden"
                            disabled={isUploading}
                            onChange={(e) => {
                              const file = e.target.files?.[0];
                              if (file) handleUploadImage(room, file);
                              e.target.value = "";
                            }}
                          />
                        </label>

                        {/* Dedicated Delete / Manage Photos Button */}
                        <button
                          type="button"
                          onClick={() => setManagingPhotosRoom(room)}
                          style={{ backgroundColor: "#dc2626", color: "#ffffff" }}
                          className="inline-flex items-center gap-1 text-xs font-bold px-3 py-1.5 rounded shadow cursor-pointer hover:opacity-90"
                          title="Open photo manager to delete any photo"
                        >
                          <Trash2 size={13} color="#ffffff" /> Delete Photos
                        </button>

                        {/* Add via URL */}
                        <button
                          type="button"
                          onClick={() => handleAddImageUrl(room)}
                          className="text-xs bg-gray-800 hover:bg-gray-700 text-gray-300 px-2.5 py-1.5 rounded transition-colors"
                          title="Add photo via image link / URL"
                        >
                          + Link
                        </button>
                      </div>
                    </div>

                    {/* Main Active Photo Preview */}
                    <div className="bg-black/60 rounded-lg overflow-hidden border border-gray-800">
                      <div className="relative aspect-[16/10]">
                        {room.images && room.images.length > 0 ? (
                          <>
                            <img
                              src={room.images[0]}
                              alt={room.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2 bg-black/85 text-[#d4a94a] text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded border border-[#d4a94a]/30 z-20">
                              ★ Main Cover Photo
                            </div>
                          </>
                        ) : room.image ? (
                          <>
                            <img
                              src={room.image}
                              alt={room.name}
                              className="w-full h-full object-cover"
                            />
                            <div className="absolute top-2 left-2 bg-black/85 text-[#d4a94a] text-[10px] font-semibold uppercase tracking-wider px-2 py-1 rounded border border-[#d4a94a]/30 z-20">
                              ★ Main Cover Photo
                            </div>
                          </>
                        ) : (
                          <div className="flex items-center justify-center h-full text-gray-500 text-xs">
                            No photos uploaded yet
                          </div>
                        )}
                      </div>

                      {/* Prominent Action Bar Below Main Photo */}
                      {(room.images?.length || room.image) ? (
                        <div className="flex items-center justify-between p-2.5 bg-[#1a1a1a] border-t border-gray-800">
                          <span className="text-[11px] text-[#d4a94a] font-medium">
                            Showing Cover Photo (Photo 1)
                          </span>
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(room, 0)}
                            style={{
                              backgroundColor: "#dc2626",
                              color: "#ffffff",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              padding: "6px 12px",
                              borderRadius: "4px",
                              fontWeight: "bold",
                              fontSize: "12px",
                              cursor: "pointer",
                            }}
                            className="hover:opacity-90 transition-opacity shadow"
                            title="Delete this main cover photo"
                          >
                            <Trash2 size={14} color="#ffffff" /> Delete Cover Photo
                          </button>
                        </div>
                      ) : null}
                    </div>

                    {/* All Room Photos with PROMINENT RED DELETE BUTTON BELOW EACH PHOTO */}
                    {(() => {
                      const allImgs = room.images && room.images.length > 0 ? room.images : (room.image ? [room.image] : []);
                      if (allImgs.length === 0) return null;
                      return (
                        <div className="space-y-2">
                          <div className="flex items-center justify-between">
                            <span className="text-[11px] text-gray-300 font-semibold">
                              All Photos ({allImgs.length}) — Click Delete below any photo:
                            </span>
                            <button
                              type="button"
                              onClick={() => setManagingPhotosRoom(room)}
                              className="text-[11px] text-[#d4a94a] hover:underline cursor-pointer"
                            >
                              Open Full Photo Manager →
                            </button>
                          </div>

                          <div className="grid grid-cols-2 sm:grid-cols-3 gap-2.5 max-h-80 overflow-y-auto p-2 border border-gray-800 rounded-lg bg-black/40">
                            {allImgs.map((img, idx) => (
                              <div
                                key={idx}
                                className={`rounded-lg overflow-hidden border ${
                                  idx === 0 ? "border-[#d4a94a] ring-1 ring-[#d4a94a]" : "border-gray-800"
                                } bg-[#1c1c1c] flex flex-col`}
                              >
                                <div className="relative aspect-[4/3] w-full overflow-hidden bg-black">
                                  <img
                                    src={img}
                                    alt=""
                                    onClick={() => handleSetCoverImage(room, idx)}
                                    className="w-full h-full object-cover cursor-pointer"
                                    title={idx === 0 ? "Main Cover Photo" : "Click to make Main Cover Photo"}
                                  />
                                  {idx === 0 ? (
                                    <span className="absolute bottom-1 left-1 bg-black/90 text-[#d4a94a] text-[9px] font-bold px-1.5 py-0.5 rounded pointer-events-none">
                                      ★ Cover
                                    </span>
                                  ) : (
                                    <button
                                      type="button"
                                      onClick={() => handleSetCoverImage(room, idx)}
                                      className="absolute bottom-1 left-1 bg-black/80 hover:bg-black text-[#d4a94a] text-[9px] font-semibold px-1.5 py-0.5 rounded cursor-pointer"
                                      title="Set this photo as Main Cover"
                                    >
                                      Make Cover
                                    </button>
                                  )}
                                </div>

                                {/* UNMISTAKABLE BRIGHT RED DELETE BUTTON UNDER THE PHOTO */}
                                <button
                                  type="button"
                                  onClick={(e) => {
                                    e.stopPropagation();
                                    handleRemoveImage(room, idx);
                                  }}
                                  style={{
                                    backgroundColor: "#dc2626",
                                    color: "#ffffff",
                                    padding: "6px 8px",
                                    fontSize: "11px",
                                    fontWeight: "bold",
                                    width: "100%",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    gap: "5px",
                                    cursor: "pointer",
                                    border: "none",
                                  }}
                                  title="Delete this photo"
                                  className="hover:opacity-90 transition-opacity"
                                >
                                  <Trash2 size={12} color="#ffffff" strokeWidth={2.5} /> Delete Photo
                                </button>
                              </div>
                            ))}
                          </div>
                        </div>
                      );
                    })()}
                  </div>

                  {/* Right Column: Room Details & Quick Price Edit */}
                  <div className="lg:col-span-7 space-y-6">
                    <div className="flex flex-wrap items-start justify-between gap-4">
                      <div>
                        <div className="text-[10px] font-semibold uppercase tracking-[0.25em] text-[#d4a94a] mb-1">
                          {room.tag || "Room Category"}
                        </div>
                        <h3 className="font-serif text-2xl font-bold text-white">
                          {room.name}
                        </h3>
                        <p className="text-xs text-gray-400 mt-1">{room.blurb}</p>
                      </div>

                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => setEditingRoom(room)}
                          className="text-xs border border-gray-700 hover:border-[#d4a94a] text-gray-300 hover:text-[#d4a94a] px-3 py-2 rounded transition-colors"
                        >
                          Edit Full Details
                        </button>
                        <button
                          onClick={() => handleDeleteRoom(room.slug, room.name)}
                          className="text-xs text-red-400 hover:text-red-300 p-2 hover:bg-red-950/40 rounded transition-colors"
                          title="Delete room"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </div>

                    {/* Quick Price Update Box */}
                    <div className="bg-[#1f1f1f] border border-[#d4a94a]/30 p-4 rounded-lg flex flex-wrap items-center justify-between gap-4">
                      <div>
                        <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block">
                          Current Nightly Price (PKR)
                        </span>
                        <div className="flex items-center gap-2 mt-1">
                          <span className="text-lg font-serif text-[#d4a94a]">₨</span>
                          <input
                            type="text"
                            defaultValue={room.price}
                            key={room.price}
                            id={`price-input-${room.slug}`}
                            className="bg-[#2a2a2a] border border-gray-700 focus:border-[#d4a94a] text-white px-3 py-1.5 rounded font-mono text-lg font-bold w-40 outline-none"
                          />
                        </div>
                      </div>

                      <button
                        onClick={() => {
                          const input = document.getElementById(
                            `price-input-${room.slug}`
                          ) as HTMLInputElement;
                          if (input) {
                            handleQuickPriceUpdate(room, input.value.trim());
                          }
                        }}
                        disabled={isSaving}
                        className="inline-flex items-center gap-2 bg-[#d4a94a] hover:bg-[#e6be60] text-black font-semibold text-xs uppercase tracking-wider px-4 py-2.5 rounded transition-colors"
                      >
                        <Save className="w-3.5 h-3.5" />
                        {isSaving ? "Saving..." : "Update Price"}
                      </button>
                    </div>

                    {/* Info Badges */}
                    <div className="grid grid-cols-3 gap-3 text-center border-y border-gray-800 py-3">
                      <div>
                        <span className="text-[10px] uppercase text-gray-500 block">Beds</span>
                        <span className="text-xs text-gray-300 font-medium">{room.beds}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-gray-500 block">Space</span>
                        <span className="text-xs text-gray-300 font-medium">{room.size}</span>
                      </div>
                      <div>
                        <span className="text-[10px] uppercase text-gray-500 block">View</span>
                        <span className="text-xs text-gray-300 font-medium">{room.view || "Mountain"}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gray-400 font-semibold block mb-2">
                        Included Features
                      </span>
                      <div className="flex flex-wrap gap-2">
                        {room.features?.map((f, i) => (
                          <span
                            key={i}
                            className="text-xs bg-[#222] border border-gray-800 text-gray-300 px-2.5 py-1 rounded"
                          >
                            ✓ {f}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal: Edit Full Room Details */}
        {editingRoom && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#181818] border border-[#d4a94a]/40 rounded-xl p-6 max-w-2xl w-full my-8 shadow-2xl">
              <div className="flex justify-between items-center pb-4 border-b border-gray-800 mb-6">
                <h3 className="text-xl font-serif font-bold text-[#d4a94a]">
                  Edit Details: {editingRoom.name}
                </h3>
                <button
                  onClick={() => setEditingRoom(null)}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  ✕ Close
                </button>
              </div>

              <div className="space-y-4">
                <div>
                  <label className="block text-xs uppercase text-gray-400 mb-1">
                    Room Name
                  </label>
                  <input
                    type="text"
                    value={editingRoom.name}
                    onChange={(e) =>
                      setEditingRoom({ ...editingRoom, name: e.target.value })
                    }
                    className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] px-3 py-2 rounded text-white text-sm outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-gray-400 mb-1">
                      Price (PKR)
                    </label>
                    <input
                      type="text"
                      value={editingRoom.price}
                      onChange={(e) =>
                        setEditingRoom({ ...editingRoom, price: e.target.value })
                      }
                      className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] px-3 py-2 rounded text-white text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-gray-400 mb-1">
                      Bedding Details
                    </label>
                    <input
                      type="text"
                      value={editingRoom.beds}
                      onChange={(e) =>
                        setEditingRoom({ ...editingRoom, beds: e.target.value })
                      }
                      className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] px-3 py-2 rounded text-white text-sm outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-gray-400 mb-1">
                      Room Size / Type
                    </label>
                    <input
                      type="text"
                      value={editingRoom.size}
                      onChange={(e) =>
                        setEditingRoom({ ...editingRoom, size: e.target.value })
                      }
                      className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] px-3 py-2 rounded text-white text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-gray-400 mb-1">
                      View
                    </label>
                    <input
                      type="text"
                      value={editingRoom.view || ""}
                      onChange={(e) =>
                        setEditingRoom({ ...editingRoom, view: e.target.value })
                      }
                      className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] px-3 py-2 rounded text-white text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-gray-400 mb-1">
                    Short Description (Blurb)
                  </label>
                  <textarea
                    rows={3}
                    value={editingRoom.blurb}
                    onChange={(e) =>
                      setEditingRoom({ ...editingRoom, blurb: e.target.value })
                    }
                    className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] px-3 py-2 rounded text-white text-sm outline-none"
                  />
                </div>

                <div>
                  <label className="block text-xs uppercase text-gray-400 mb-1">
                    Features (comma separated)
                  </label>
                  <input
                    type="text"
                    value={editingRoom.features?.join(", ") || ""}
                    onChange={(e) =>
                      setEditingRoom({
                        ...editingRoom,
                        features: e.target.value.split(",").map((s) => s.trim()).filter(Boolean),
                      })
                    }
                    className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] px-3 py-2 rounded text-white text-sm outline-none"
                  />
                </div>
              </div>

              <div className="flex justify-end gap-3 mt-6 pt-4 border-t border-gray-800">
                <button
                  onClick={() => setEditingRoom(null)}
                  className="px-4 py-2 border border-gray-700 text-gray-300 rounded text-xs uppercase tracking-wider hover:bg-gray-800"
                >
                  Cancel
                </button>
                <button
                  onClick={() => handleSaveRoom(editingRoom)}
                  disabled={savingSlug === editingRoom.slug}
                  className="px-5 py-2 bg-[#d4a94a] hover:bg-[#e6be60] text-black font-semibold rounded text-xs uppercase tracking-wider"
                >
                  {savingSlug === editingRoom.slug ? "Saving..." : "Save Changes"}
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Modal: Add New Room */}
        {isAddingNew && (
          <div className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
            <div className="bg-[#181818] border border-[#d4a94a]/40 rounded-xl p-6 max-w-2xl w-full my-8 shadow-2xl">
              <div className="flex justify-between items-center pb-4 border-b border-gray-800 mb-6">
                <h3 className="text-xl font-serif font-bold text-[#d4a94a]">
                  Add New Room
                </h3>
                <button
                  onClick={() => setIsAddingNew(false)}
                  className="text-gray-400 hover:text-white text-sm"
                >
                  ✕ Close
                </button>
              </div>

              <form onSubmit={handleCreateRoom} className="space-y-4">
                <div>
                  <label className="block text-xs uppercase text-gray-400 mb-1">
                    Room Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="e.g. Executive Mountain Suite"
                    value={newRoom.name}
                    onChange={(e) =>
                      setNewRoom({ ...newRoom, name: e.target.value })
                    }
                    className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] px-3 py-2 rounded text-white text-sm outline-none"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-gray-400 mb-1">
                      Price per Night (PKR) *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. 20,000.00"
                      value={newRoom.price}
                      onChange={(e) =>
                        setNewRoom({ ...newRoom, price: e.target.value })
                      }
                      className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] px-3 py-2 rounded text-white text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-gray-400 mb-1">
                      Bedding Details
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. King Bed + Single"
                      value={newRoom.beds}
                      onChange={(e) =>
                        setNewRoom({ ...newRoom, beds: e.target.value })
                      }
                      className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] px-3 py-2 rounded text-white text-sm outline-none"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs uppercase text-gray-400 mb-1">
                      Room Size / Type
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Spacious"
                      value={newRoom.size}
                      onChange={(e) =>
                        setNewRoom({ ...newRoom, size: e.target.value })
                      }
                      className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] px-3 py-2 rounded text-white text-sm outline-none"
                    />
                  </div>
                  <div>
                    <label className="block text-xs uppercase text-gray-400 mb-1">
                      View
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. Valley View"
                      value={newRoom.view || ""}
                      onChange={(e) =>
                        setNewRoom({ ...newRoom, view: e.target.value })
                      }
                      className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] px-3 py-2 rounded text-white text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs uppercase text-gray-400 mb-1">
                    Short Description
                  </label>
                  <textarea
                    rows={2}
                    value={newRoom.blurb}
                    onChange={(e) =>
                      setNewRoom({ ...newRoom, blurb: e.target.value })
                    }
                    className="w-full bg-[#242424] border border-gray-700 focus:border-[#d4a94a] px-3 py-2 rounded text-white text-sm outline-none"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-4 border-t border-gray-800">
                  <button
                    type="button"
                    onClick={() => setIsAddingNew(false)}
                    className="px-4 py-2 border border-gray-700 text-gray-300 rounded text-xs uppercase tracking-wider hover:bg-gray-800"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    disabled={savingSlug === "new"}
                    className="px-5 py-2 bg-[#d4a94a] hover:bg-[#e6be60] text-black font-semibold rounded text-xs uppercase tracking-wider"
                  >
                    {savingSlug === "new" ? "Creating..." : "Create Room"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        )}

        {/* Modal: Full Photo Manager (Delete & Reorder) */}
        {managingPhotosRoom && (() => {
          const currentRoom = rooms.find((r) => r.slug === managingPhotosRoom.slug) || managingPhotosRoom;
          const currentPhotos = currentRoom.images && currentRoom.images.length > 0 ? currentRoom.images : (currentRoom.image ? [currentRoom.image] : []);

          return (
            <div className="fixed inset-0 z-50 bg-black/85 backdrop-blur-sm flex items-center justify-center p-4 overflow-y-auto">
              <div className="bg-[#181818] border border-[#d4a94a]/40 rounded-xl p-6 max-w-3xl w-full my-8 shadow-2xl">
                <div className="flex justify-between items-center pb-4 border-b border-gray-800 mb-6">
                  <div>
                    <h3 className="text-xl font-serif font-bold text-[#d4a94a] flex items-center gap-2">
                      <ImageIcon className="w-5 h-5 text-[#d4a94a]" /> Photo Manager — {currentRoom.name}
                    </h3>
                    <p className="text-xs text-gray-400 mt-1">
                      {currentPhotos.length} Total Photos · Click the red delete button to delete any photo instantly.
                    </p>
                  </div>
                  <button
                    onClick={() => setManagingPhotosRoom(null)}
                    className="text-gray-400 hover:text-white text-xs px-3 py-1.5 bg-gray-800 hover:bg-gray-700 rounded transition-colors"
                  >
                    ✕ Close
                  </button>
                </div>

                {currentPhotos.length === 0 ? (
                  <div className="text-center py-12 text-gray-500 text-sm">
                    No photos found for this room. Click below to upload one.
                  </div>
                ) : (
                  <div className="space-y-3 max-h-[60vh] overflow-y-auto pr-1">
                    {currentPhotos.map((img, idx) => (
                      <div
                        key={idx}
                        className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-3 rounded-lg border border-gray-800 bg-[#141414]"
                      >
                        <div className="flex items-center gap-3">
                          <img
                            src={img}
                            alt=""
                            className="w-20 h-16 object-cover rounded border border-gray-700 shrink-0"
                          />
                          <div className="min-w-0">
                            <div className="flex items-center gap-2 flex-wrap">
                              <span className="text-xs font-bold text-white">
                                Photo #{idx + 1}
                              </span>
                              {idx === 0 ? (
                                <span className="bg-[#d4a94a] text-black text-[10px] font-bold px-2 py-0.5 rounded">
                                  ★ Main Cover Photo
                                </span>
                              ) : (
                                <span className="text-[10px] text-gray-400 bg-gray-800 px-2 py-0.5 rounded">
                                  Gallery Photo
                                </span>
                              )}
                            </div>
                            <p className="text-[11px] text-gray-500 truncate max-w-sm mt-1 font-mono">
                              {img}
                            </p>
                          </div>
                        </div>

                        <div className="flex items-center gap-2 shrink-0 self-end sm:self-center">
                          {idx !== 0 && (
                            <button
                              type="button"
                              onClick={() => handleSetCoverImage(currentRoom, idx)}
                              className="px-3 py-2 text-xs font-semibold rounded bg-gray-800 hover:bg-gray-700 text-[#d4a94a] border border-[#d4a94a]/30 transition-colors"
                            >
                              Make Cover
                            </button>
                          )}
                          <button
                            type="button"
                            onClick={() => handleRemoveImage(currentRoom, idx)}
                            style={{
                              backgroundColor: "#dc2626",
                              color: "#ffffff",
                              display: "inline-flex",
                              alignItems: "center",
                              gap: "6px",
                              padding: "8px 14px",
                              borderRadius: "6px",
                              fontWeight: "bold",
                              fontSize: "12px",
                              cursor: "pointer",
                            }}
                            className="shadow-lg hover:opacity-90 transition-opacity"
                            title="Delete this photo"
                          >
                            <Trash2 size={14} color="#ffffff" /> Delete Photo
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                )}

                <div className="mt-6 pt-4 border-t border-gray-800 flex justify-between items-center">
                  <label className="cursor-pointer inline-flex items-center gap-1.5 text-xs bg-[#d4a94a] hover:bg-[#e6be60] text-black font-semibold px-4 py-2 rounded transition-colors shadow">
                    <Upload className="w-3.5 h-3.5" />
                    {uploadingSlug === currentRoom.slug ? "Uploading..." : "Upload New Photo"}
                    <input
                      type="file"
                      accept="image/*"
                      className="hidden"
                      disabled={uploadingSlug === currentRoom.slug}
                      onChange={(e) => {
                        const file = e.target.files?.[0];
                        if (file) handleUploadImage(currentRoom, file);
                        e.target.value = "";
                      }}
                    />
                  </label>

                  <button
                    onClick={() => setManagingPhotosRoom(null)}
                    className="px-5 py-2 bg-gray-800 hover:bg-gray-700 text-white rounded text-xs font-semibold"
                  >
                    Done
                  </button>
                </div>
              </div>
            </div>
          );
        })()}
      </main>
    </div>
  );
}
