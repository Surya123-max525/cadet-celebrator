import { createFileRoute } from "@tanstack/react-router";
import { useEffect, useState, useRef } from "react";
import { 
  Trophy, 
  Download, 
  Printer, 
  Upload, 
  Plus, 
  Trash2, 
  Sparkles, 
  Image as ImageIcon, 
  Award,
  RotateCcw
} from "lucide-react";
import html2canvas from "html2canvas";
import heroImg from "@/assets/hero-cadets.jpg";
import srecLogoImg from "@/assets/srec-logo.png";
import snrLogoImg from "@/assets/snr-trust-logo.png";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { property: "og:image", content: heroImg },
      { name: "twitter:image", content: heroImg },
    ],
  }),
});

// ==========================================
// SVG LOGOS WITH DETAILED ACADEMIC BRANDING
// ==========================================

function SrecLogo() {
  return (
    <svg viewBox="0 0 120 120" className="w-16 h-16 md:w-20 md:h-20 shrink-0 filter drop-shadow-md">
      <defs>
        <path id="srec-text-arc" d="M 60, 108 A 48,48 0 1,1 59.9,108" />
      </defs>
      {/* Outer circular frame */}
      <circle cx="60" cy="60" r="54" fill="#0b301c" stroke="#b59410" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="#b59410" strokeWidth="1" strokeDasharray="3, 2" />
      
      {/* Inner dark center */}
      <circle cx="60" cy="60" r="38" fill="#04150c" stroke="#b59410" strokeWidth="1.5" />
      
      {/* Inner academic symbols: Book, Lamp, and Gear */}
      <g transform="translate(60, 60)" fill="none" stroke="#b59410" strokeWidth="1.5">
        {/* Book */}
        <path d="M -12,5 Q -4,1 0,7 Q 4,1 12,5 L 12,-10 Q 4,-14 0,-8 Q -4,-14 -12,-10 Z" fill="#b59410" fillOpacity="0.25" />
        <path d="M 0, -8 L 0, 7" />
        {/* Traditional Lamp (Jyoti) on top of the book */}
        <path d="M -5,-14 C -5,-21 5,-21 5,-14 L -5,-14" fill="#b59410" />
        <path d="M 0,-21 C 2,-25 0,-29 0,-29 C 0,-29 -2,-25 0,-21 Z" fill="#ff9f1c" />
        {/* Gear surrounding to represent Engineering */}
        <circle cx="0" cy="0" r="26" stroke="#b59410" strokeWidth="1" strokeDasharray="6,4" />
      </g>
      
      {/* SREC Text on Outer Arc */}
      <text className="fill-white text-[7px] font-extrabold uppercase tracking-wider font-sans">
        <textPath href="#srec-text-arc" startOffset="25%" textAnchor="middle">
          SREC COIMBATORE
        </textPath>
      </text>
      
      {/* Established tagline */}
      <text className="fill-[#b59410] text-[6px] font-bold uppercase tracking-widest font-sans">
        <textPath href="#srec-text-arc" startOffset="75%" textAnchor="middle">
          ESTD 1994
        </textPath>
      </text>
    </svg>
  );
}

function SnrLogo() {
  return (
    <svg viewBox="0 0 120 120" className="w-16 h-16 md:w-20 md:h-20 shrink-0 filter drop-shadow-md">
      <defs>
        <path id="snr-text-arc" d="M 60, 108 A 48,48 0 1,1 59.9,108" />
      </defs>
      {/* Outer circular frame */}
      <circle cx="60" cy="60" r="54" fill="#091d3a" stroke="#b59410" strokeWidth="2.5" />
      <circle cx="60" cy="60" r="50" fill="none" stroke="#b59410" strokeWidth="1" strokeDasharray="3, 2" />
      
      {/* Inner dark center */}
      <circle cx="60" cy="60" r="38" fill="#030c18" stroke="#b59410" strokeWidth="1.5" />
      
      {/* Inner traditional Indian lamp (Vilakku) */}
      <g transform="translate(60, 60)" fill="none" stroke="#b59410" strokeWidth="1.5">
        {/* Lamp Base */}
        <path d="M -15,22 L 15,22 L 10,16 L -10,16 Z" fill="#b59410" />
        <path d="M -4,16 L -2,4 L 2,4 L 4,16" fill="#b59410" />
        <path d="M -12,4 C -12,-8 12,-8 12,4 Z" fill="#b59410" fillOpacity="0.2" />
        {/* Glowing Flame */}
        <path d="M 0,-6 C 4,-12 0,-20 0,-20 C 0,-20 -4,-12 0,-6 Z" fill="#ff9f1c" />
        {/* Sparkle lines */}
        <line x1="-12" y1="-12" x2="-6" y2="-9" stroke="#ff9f1c" strokeWidth="1" />
        <line x1="12" y1="-12" x2="6" y2="-9" stroke="#ff9f1c" strokeWidth="1" />
        <line x1="0" y1="-24" x2="0" y2="-28" stroke="#ff9f1c" strokeWidth="1" />
      </g>
      
      {/* Text on Arc */}
      <text className="fill-white text-[7px] font-extrabold uppercase tracking-wider font-sans">
        <textPath href="#snr-text-arc" startOffset="25%" textAnchor="middle">
          SNR SONS TRUST
        </textPath>
      </text>
      
      <text className="fill-[#b59410] text-[6px] font-bold uppercase tracking-widest font-sans">
        <textPath href="#snr-text-arc" startOffset="75%" textAnchor="middle">
          IN SERVICE 1970
        </textPath>
      </text>
    </svg>
  );
}

// ==========================================
// THEMES CONFIGURATION (DEFAULT LIGHT THEME)
// ==========================================

const THEMES = {
  "ivory-gold": {
    name: "Classic White & Gold (Default)",
    bg: "bg-[#ffffff]",
    text: "text-gray-900",
    headerText: "text-[#0b301c]",
    subHeaderText: "text-gray-700",
    cardBg: "bg-[#fafaf6] border-gray-200/80 shadow-md",
    border: "border-[#b59410]",
    accent: "text-[#0b301c]",
    bgGradient: "linear-gradient(135deg, #ffffff 0%, #fcfbf6 100%)",
    goldBorder: "#b59410",
    primaryColor: "#ffffff",
    textColor: "#111827", // text-gray-900
    mutedColor: "#374151", // text-gray-700
    tagBg: "bg-[#0b301c]/5 border-[#0b301c]/10 text-[#0b301c]",
    quoteColor: "text-[#b59410]/20",
    honoreeTitle: "text-[#0b301c]",
    quoteTextColor: "text-gray-800"
  },
  "emerald-gold": {
    name: "Royal Emerald & Gold",
    bg: "bg-[#052211]",
    text: "text-white",
    headerText: "text-white",
    subHeaderText: "text-gray-300",
    cardBg: "bg-[#03150b]/90 border-white/10 shadow-lg",
    border: "border-[#d4af37]",
    accent: "text-[#d4af37]",
    bgGradient: "linear-gradient(135deg, #052211 0%, #010a05 100%)",
    goldBorder: "#d4af37",
    primaryColor: "#052211",
    textColor: "#ffffff",
    mutedColor: "#a0bba8",
    tagBg: "bg-[#d4af37]/10 border-[#d4af37]/30 text-[#d4af37]",
    quoteColor: "text-[#d4af37]/25",
    honoreeTitle: "text-[#d4af37]",
    quoteTextColor: "text-gray-200"
  },
  "royal-navy": {
    name: "Imperial Navy & Gold",
    bg: "bg-[#06152b]",
    text: "text-white",
    headerText: "text-white",
    subHeaderText: "text-gray-300",
    cardBg: "bg-[#020b16]/90 border-white/10 shadow-lg",
    border: "border-[#d4af37]",
    accent: "text-[#d4af37]",
    bgGradient: "linear-gradient(135deg, #06152b 0%, #010408 100%)",
    goldBorder: "#d4af37",
    primaryColor: "#06152b",
    textColor: "#ffffff",
    mutedColor: "#9bb5db",
    tagBg: "bg-[#d4af37]/10 border-[#d4af37]/30 text-[#d4af37]",
    quoteColor: "text-[#d4af37]/25",
    honoreeTitle: "text-[#d4af37]",
    quoteTextColor: "text-gray-200"
  },
  "burgundy-gold": {
    name: "Academic Burgundy",
    bg: "bg-[#33050a]",
    text: "text-white",
    headerText: "text-white",
    subHeaderText: "text-gray-300",
    cardBg: "bg-[#1c0205]/90 border-white/10 shadow-lg",
    border: "border-[#d4af37]",
    accent: "text-[#d4af37]",
    bgGradient: "linear-gradient(135deg, #33050a 0%, #0d0102 100%)",
    goldBorder: "#d4af37",
    primaryColor: "#33050a",
    textColor: "#ffffff",
    mutedColor: "#cca2a7",
    tagBg: "bg-[#d4af37]/10 border-[#d4af37]/30 text-[#d4af37]",
    quoteColor: "text-[#d4af37]/25",
    honoreeTitle: "text-[#d4af37]",
    quoteTextColor: "text-gray-200"
  }
};

interface NameRow {
  id: string;
  name: string;
  detail: string;
}

function Index() {
  const [trustName, setTrustName] = useState("SNR SONS CHARITABLE TRUST");
  const [collegeName, setCollegeName] = useState("SRI RAMAKRISHNA ENGINEERING COLLEGE");
  const [tagline, setTagline] = useState("AUTONOMOUS INSTITUTION | REACCREDITED BY NBA & NAAC WITH 'A+' GRADE");
  const [departmentName, setDepartmentName] = useState("NCC ARMY WING (5/4 COY)");
  const [achievementTitle, setAchievementTitle] = useState("CONGRATULATIONS TO OUR NCC CADETS");
  const [achievementSubtitle, setAchievementSubtitle] = useState("Overall Championship - Combined Annual Training Camp (CATC)");
  const [quoteContent, setQuoteContent] = useState("Our NCC cadets have brought laurels to our institution. The Coimbatore NCC Group conducted a ten days Combined Annual Training Camp at Rathinam Global University. During the camp, our NCC cadets excelled in various training activities and competitions, winning the Overall Championship award along with several medals in different events. Our beloved Principal sir felicitated the cadets in recognition of their outstanding achievements and appreciated their dedication and exemplary performance.");
  
  // Names list state
  const [names, setNames] = useState<NameRow[]>([
    { id: "1", name: "HARSHAVARDINI.D - 2503022", detail: "Awarded 1st Prize in Firing" },
    { id: "2", name: "KAVINVENKAT.J - 2503029", detail: "Awarded First Prize in Guard of Honour drill" }
  ]);

  // Bulk paste text states
  const [namesInputMode, setNamesInputMode] = useState<"single" | "bulk">("single");
  const [bulkText, setBulkText] = useState(
    "1. Harshavardini.D-2503022 (Awarded 1st Prize in Firing)\n2. Kavinvenkat.J-2503029 (Awarded First Prize in Guard of Honour drill)"
  );

  // Center image state
  const [centerImage, setCenterImage] = useState<string>(heroImg);
  const [imageFit, setImageFit] = useState<"cover" | "contain">("cover");

  // Style customization states - Default set to Light White Theme
  const [selectedTheme, setSelectedTheme] = useState<keyof typeof THEMES>("ivory-gold");
  const [selectedLayout, setSelectedLayout] = useState<"three-column" | "split-screen" | "centered">("three-column");
  const [borderStyle, setBorderStyle] = useState<"royal-certificate" | "classic-double" | "floral-corners" | "minimal">("royal-certificate");

  // Editing helper states
  const [newName, setNewName] = useState("");
  const [newDetail, setNewDetail] = useState("");

  // Responsiveness scale state
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);
  const posterRef = useRef<HTMLDivElement>(null);

  const themeConfig = THEMES[selectedTheme];

  // Calculate dynamic scale factor to make A4 Poster fits perfectly on any viewport
  useEffect(() => {
    const handleResize = () => {
      if (containerRef.current) {
        const containerWidth = containerRef.current.clientWidth;
        // Poster fixed base width is 1122px (standard A4 landscape at 96dpi)
        const newScale = Math.min((containerWidth - 32) / 1122, 1);
        setScale(newScale);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    // Timeout check to ensure DOM has rendered
    const t = setTimeout(handleResize, 200);

    return () => {
      window.removeEventListener("resize", handleResize);
      clearTimeout(t);
    };
  }, []);

  // Image Upload handler
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        if (uploadEvent.target?.result) {
          setCenterImage(uploadEvent.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Names Management
  const addName = () => {
    if (newName.trim()) {
      setNames([
        ...names,
        {
          id: Date.now().toString(),
          name: newName.toUpperCase(),
          detail: newDetail || ""
        }
      ]);
      setNewName("");
      setNewDetail("");
    }
  };

  const removeName = (id: string) => {
    setNames(names.filter((n) => n.id !== id));
  };

  // Reset to initial placeholders
  const resetToDefault = () => {
    setTrustName("SNR SONS CHARITABLE TRUST");
    setCollegeName("SRI RAMAKRISHNA ENGINEERING COLLEGE");
    setTagline("AUTONOMOUS INSTITUTION | REACCREDITED BY NBA & NAAC WITH 'A+' GRADE");
    setDepartmentName("NCC ARMY WING (5/4 COY)");
    setAchievementTitle("CONGRATULATIONS TO OUR NCC CADETS");
    setAchievementSubtitle("Overall Championship - Combined Annual Training Camp (CATC)");
    setQuoteContent("Our NCC cadets have brought laurels to our institution. The Coimbatore NCC Group conducted a ten days Combined Annual Training Camp at Rathinam Global University. During the camp, our NCC cadets excelled in various training activities and competitions, winning the Overall Championship award along with several medals in different events. Our beloved Principal sir felicitated the cadets in recognition of their outstanding achievements and appreciated their dedication and exemplary performance.");
    setNames([
      { id: "1", name: "HARSHAVARDINI.D - 2503022", detail: "Awarded 1st Prize in Firing" },
      { id: "2", name: "KAVINVENKAT.J - 2503029", detail: "Awarded First Prize in Guard of Honour drill" }
    ]);
    setBulkText(
      "1. Harshavardini.D-2503022 (Awarded 1st Prize in Firing)\n2. Kavinvenkat.J-2503029 (Awarded First Prize in Guard of Honour drill)"
    );
    setNamesInputMode("single");
    setCenterImage(heroImg);
    setImageFit("cover");
    setSelectedTheme("ivory-gold");
    setSelectedLayout("three-column");
    setBorderStyle("royal-certificate");
  };

  // Bulk import parser
  const handleBulkImport = () => {
    if (!bulkText.trim()) return;
    const lines = bulkText.split("\n").map(l => l.trim()).filter(l => l.length > 0);
    const importedNames: NameRow[] = lines.map((line, idx) => {
      // 1. Remove leading number like "1." or "2. "
      let cleanLine = line.replace(/^\d+[\.\s\-)]*/, "").trim();
      
      // 2. Extract parentheses content (details)
      const detailMatch = cleanLine.match(/\(([^)]+)\)/);
      let detail = "";
      if (detailMatch) {
        detail = detailMatch[1].trim();
        cleanLine = cleanLine.replace(/\(([^)]+)\)/, "").trim();
      }
      
      // 3. Extract name and roll number (split by '-')
      const parts = cleanLine.split("-");
      const namePart = parts[0]?.trim() || "CADET";
      const rollPart = parts[1]?.trim() || "";
      
      const formattedName = rollPart ? `${namePart.toUpperCase()} - ${rollPart}` : namePart.toUpperCase();
      
      return {
        id: (Date.now() + idx).toString(),
        name: formattedName,
        detail: detail
      };
    });

    if (importedNames.length > 0) {
      setNames(importedNames);
    }
  };

  // Direct PNG Download utilizing html2canvas
  const handleDownloadPng = async () => {
    if (!posterRef.current) return;
    try {
      // Force scaling to ensure ultra-sharp high resolution rendering
      const canvas = await html2canvas(posterRef.current, {
        scale: 2.2,
        useCORS: true,
        allowTaint: true,
        backgroundColor: themeConfig.primaryColor,
        logging: false,
      });
      
      const url = canvas.toDataURL("image/png");
      const link = document.createElement("a");
      link.href = url;
      link.download = `poster-${achievementTitle.toLowerCase().replace(/\s+/g, "-")}.png`;
      link.click();
    } catch (error) {
      console.error("Failed to generate image:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#0c0f13] bg-[radial-gradient(circle_at_top_left,rgba(11,48,28,0.15),transparent_40%),radial-gradient(circle_at_bottom_right,rgba(9,29,58,0.15),transparent_40%)] text-gray-100 flex flex-col print:bg-white print:text-black">
      
      {/* ==========================================
          TOP NAVIGATION BAR (NO-PRINT)
          ========================================== */}
      <nav className="no-print bg-[#11141a]/95 backdrop-blur-xl border-b border-white/10 px-6 py-3 flex flex-wrap items-center justify-between gap-4 sticky top-0 z-50 shadow-md">
        <div className="flex items-center gap-2">
          <Trophy className="h-5 w-5 text-amber-500 animate-pulse shrink-0" />
          <div className="leading-tight">
            <h1 className="text-sm font-bold tracking-wider text-white">SREC & SNR Poster Editor</h1>
            <p className="text-[9px] text-gray-400">Click any text on the poster to edit it directly!</p>
          </div>
        </div>
        
        {/* Navigation Quick Settings */}
        <div className="flex items-center gap-4 flex-wrap">
          <div className="flex items-center gap-2">
            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Theme:</span>
            <select 
              value={selectedTheme} 
              onChange={(e) => setSelectedTheme(e.target.value as any)}
              title="Select Poster Theme"
              className="bg-gray-900 border border-gray-800 text-[11px] text-white rounded px-2 py-0.5 focus:outline-none focus:border-amber-500"
            >
              {Object.entries(THEMES).map(([k, v]) => (
                <option key={k} value={k}>{v.name}</option>
              ))}
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Layout:</span>
            <select 
              value={selectedLayout} 
              onChange={(e) => setSelectedLayout(e.target.value as any)}
              title="Select Poster Layout"
              className="bg-gray-900 border border-gray-800 text-[11px] text-white rounded px-2 py-0.5 focus:outline-none focus:border-amber-500"
            >
              <option value="three-column">Three Column</option>
              <option value="split-screen">Split Screen</option>
              <option value="centered">Centered</option>
            </select>
          </div>

          <div className="flex items-center gap-2">
            <span className="text-[9px] text-gray-400 font-bold uppercase tracking-wider">Border:</span>
            <select 
              value={borderStyle} 
              onChange={(e) => setBorderStyle(e.target.value as any)}
              title="Select Poster Border Style"
              className="bg-gray-900 border border-gray-800 text-[11px] text-white rounded px-2 py-0.5 focus:outline-none focus:border-amber-500"
            >
              <option value="royal-certificate">Royal</option>
              <option value="classic-double">Classic</option>
              <option value="floral-corners">Floral</option>
              <option value="minimal">Minimal</option>
            </select>
          </div>

          <div className="h-4 w-px bg-white/10" />

          {/* Quick Action buttons in nav bar */}
          <div className="flex items-center gap-2">
            <button 
              onClick={handleDownloadPng}
              className="bg-amber-500 hover:bg-amber-600 text-black px-3 py-1 rounded text-xs font-bold transition-all shadow hover:shadow-amber-500/10 active:scale-95 flex items-center gap-1"
            >
              <Download className="h-3 w-3" /> Download PNG
            </button>
            <button 
              onClick={() => window.print()}
              className="bg-gray-800 hover:bg-gray-700 text-white px-3 py-1 rounded text-xs font-bold transition-all active:scale-95 flex items-center gap-1"
            >
              <Printer className="h-3 w-3" /> Print / PDF
            </button>
            <button 
              onClick={resetToDefault}
              className="text-gray-400 hover:text-white p-1 rounded hover:bg-gray-800 transition-colors"
              title="Reset defaults"
            >
              <RotateCcw className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </nav>

      {/* Main Workspace Area */}
      <div className="flex-1 flex flex-col xl:flex-row print:bg-white print:text-black overflow-hidden">
        
        {/* ==========================================
            LEFT: EDITOR / CONTROL PANEL (NO-PRINT)
            ========================================== */}
      <aside className="w-full xl:w-[420px] xl:min-w-[420px] xl:max-h-screen xl:overflow-y-auto bg-[#181d25]/60 backdrop-blur-xl border-b xl:border-b-0 xl:border-r border-white/10 p-6 flex flex-col gap-6 no-print shrink-0 shadow-2xl">
        
        {/* App Title */}
        <div className="flex items-center justify-between border-b border-gray-800 pb-4">
          <div className="flex items-center gap-2">
            <Trophy className="h-6 w-6 text-amber-500 animate-pulse" />
            <div>
              <h1 className="text-md font-bold tracking-wider text-white">SREC & SNR</h1>
              <p className="text-[10px] text-gray-400">Landscape Poster Creator</p>
            </div>
          </div>
          <button 
            onClick={resetToDefault}
            className="p-1.5 rounded-lg bg-gray-800 hover:bg-gray-700 text-gray-400 hover:text-white transition-colors"
            title="Reset default values"
          >
            <RotateCcw className="h-4 w-4" />
          </button>
        </div>

        {/* Form Fields Accordion */}
        <div className="flex flex-col gap-5 text-sm">
          
          {/* Institution Headers */}
          <div className="space-y-3">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-500 block">Institution Details</label>
            <div>
              <span className="text-[10px] text-gray-400">Trust Name</span>
              <input 
                type="text" 
                value={trustName} 
                onChange={(e) => setTrustName(e.target.value)} 
                className="w-full mt-1 bg-gray-900 border border-gray-700 rounded-md px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500" 
              />
            </div>
            <div>
              <span className="text-[10px] text-gray-400">College / Institution Name</span>
              <input 
                type="text" 
                value={collegeName} 
                onChange={(e) => setCollegeName(e.target.value)} 
                className="w-full mt-1 bg-gray-900 border border-gray-700 rounded-md px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500" 
              />
            </div>
            <div>
              <span className="text-[10px] text-gray-400">College Tagline</span>
              <input 
                type="text" 
                value={tagline} 
                onChange={(e) => setTagline(e.target.value)} 
                className="w-full mt-1 bg-gray-900 border border-gray-700 rounded-md px-3 py-1.5 text-[10px] text-white focus:outline-none focus:border-amber-500" 
              />
            </div>
            <div>
              <span className="text-[10px] text-gray-400">Department / Organizer Name</span>
              <input 
                type="text" 
                value={departmentName} 
                onChange={(e) => setDepartmentName(e.target.value)} 
                className="w-full mt-1 bg-gray-900 border border-gray-700 rounded-md px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500" 
              />
            </div>
          </div>

          {/* Achievement Headings */}
          <div className="space-y-3 pt-3 border-t border-gray-800">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-500 block">Achievement Titles</label>
            <div>
              <span className="text-[10px] text-gray-400">Main Title Banner</span>
              <input 
                type="text" 
                value={achievementTitle} 
                onChange={(e) => setAchievementTitle(e.target.value)} 
                className="w-full mt-1 bg-gray-900 border border-gray-700 rounded-md px-3 py-1.5 text-xs text-white font-semibold focus:outline-none focus:border-amber-500" 
              />
            </div>
            <div>
              <span className="text-[10px] text-gray-400">Subtitle Description</span>
              <textarea 
                rows={2}
                value={achievementSubtitle} 
                onChange={(e) => setAchievementSubtitle(e.target.value)} 
                className="w-full mt-1 bg-gray-900 border border-gray-700 rounded-md px-3 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500 resize-none" 
              />
            </div>
          </div>

          {/* Image Uploader */}
          <div className="space-y-3 pt-3 border-t border-gray-800">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-500 flex items-center justify-between">
              <span>Center Image</span>
              <span className="text-[10px] text-gray-400 font-normal">One Image at Center</span>
            </label>
            
            <div className="relative group border border-dashed border-gray-700 rounded-lg p-3 bg-gray-900 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-amber-500 transition-colors">
              <input 
                type="file" 
                accept="image/*" 
                onChange={handleImageUpload} 
                className="absolute inset-0 opacity-0 cursor-pointer w-full h-full"
              />
              <ImageIcon className="h-5 w-5 text-gray-400 group-hover:text-amber-500" />
              <p className="text-[10px] text-gray-400 text-center">
                Click or drag to upload central photo
              </p>
            </div>

            {/* Fit mode selector */}
            <div className="flex items-center justify-between text-xs bg-gray-900 p-2 rounded-md border border-gray-800">
              <span className="text-gray-400 text-[10px]">Photo Fit Mode:</span>
              <div className="flex gap-1">
                {(["cover", "contain"] as const).map((fit) => (
                  <button
                    key={fit}
                    onClick={() => setImageFit(fit)}
                    className={`px-2 py-0.5 rounded text-[10px] uppercase font-semibold transition-colors ${
                      imageFit === fit 
                        ? "bg-amber-500 text-black" 
                        : "bg-gray-800 hover:bg-gray-700 text-gray-300"
                    }`}
                  >
                    {fit}
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Names List Editor */}
          <div className="space-y-3 pt-3 border-t border-gray-800">
            <div className="flex items-center justify-between">
              <label className="text-xs font-bold uppercase tracking-wider text-amber-500">Honorees / Achievers Names</label>
              
              {/* Tab Selector */}
              <div className="flex bg-gray-950 p-0.5 rounded border border-gray-800 text-[9px] font-bold">
                <button 
                  onClick={() => setNamesInputMode("single")} 
                  className={`px-2 py-0.5 rounded transition-all ${namesInputMode === "single" ? "bg-amber-500 text-black" : "text-gray-400 hover:text-white"}`}
                >
                  Single
                </button>
                <button 
                  onClick={() => setNamesInputMode("bulk")} 
                  className={`px-2 py-0.5 rounded transition-all ${namesInputMode === "bulk" ? "bg-amber-500 text-black" : "text-gray-400 hover:text-white"}`}
                >
                  Bulk Paste
                </button>
              </div>
            </div>
            
            <div className="space-y-2 max-h-[160px] overflow-y-auto pr-1 bg-gray-900/50 p-2 rounded-md border border-gray-800">
              {names.map((n) => (
                <div key={n.id} className="flex items-center justify-between bg-gray-900 p-2 rounded border border-gray-800 text-xs animate-fade-up">
                  <div className="truncate pr-2">
                    <span className="font-semibold text-white block truncate">{n.name}</span>
                    <span className="text-[10px] text-gray-400 block truncate">{n.detail}</span>
                  </div>
                  <button
                    onClick={() => removeName(n.id)}
                    className="p-1 rounded text-red-400 hover:bg-red-950/30 hover:text-red-300 shrink-0"
                  >
                    <Trash2 className="h-3.5 w-3.5" />
                  </button>
                </div>
              ))}
              {names.length === 0 && (
                <p className="text-[10px] text-gray-500 text-center py-4">No names added yet.</p>
              )}
            </div>

            {namesInputMode === "single" ? (
              <div className="flex flex-col gap-2 p-2.5 bg-gray-900 rounded-lg border border-gray-800">
                <input
                  type="text"
                  placeholder="Full Name (e.g. S. DHARANESH)"
                  value={newName}
                  onChange={(e) => setNewName(e.target.value)}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-amber-500"
                />
                <div className="flex gap-2">
                  <input
                    type="text"
                    placeholder="Detail (e.g. III CSE)"
                    value={newDetail}
                    onChange={(e) => setNewDetail(e.target.value)}
                    className="flex-1 bg-gray-800 border border-gray-700 rounded px-2.5 py-1 text-xs text-white focus:outline-none focus:border-amber-500"
                  />
                  <button
                    onClick={addName}
                    className="bg-amber-500 hover:bg-amber-600 text-black px-2.5 py-1 rounded text-xs font-semibold flex items-center gap-1 transition-colors"
                  >
                    <Plus className="h-3.5 w-3.5" /> Add
                  </button>
                </div>
              </div>
            ) : (
              <div className="flex flex-col gap-2 p-2.5 bg-gray-900 rounded-lg border border-gray-800">
                <span className="text-[9px] text-gray-400">Paste your list below (one cadet per line):</span>
                <textarea
                  rows={4}
                  value={bulkText}
                  onChange={(e) => setBulkText(e.target.value)}
                  placeholder={`1. Harshavardini.D-2503022 (Awarded 1st Prize in Firing)\n2. Kavinvenkat.J-2503029 (Awarded First Prize in Guard of Honour drill)`}
                  className="w-full bg-gray-800 border border-gray-700 rounded px-2.5 py-1.5 text-xs text-white focus:outline-none focus:border-amber-500 resize-none font-mono"
                />
                <button
                  onClick={handleBulkImport}
                  className="w-full bg-amber-500 hover:bg-amber-600 text-black py-1 rounded text-xs font-bold transition-colors"
                >
                  Import & Replace List
                </button>
              </div>
            )}
          </div>

          {/* Quote Section */}
          <div className="space-y-3 pt-3 border-t border-gray-800">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-500 block">Content / Quote (Will use Quotes)</label>
            <textarea 
              rows={3}
              value={quoteContent} 
              onChange={(e) => setQuoteContent(e.target.value)} 
              placeholder="Enter motivational quote or message..."
              className="w-full bg-gray-900 border border-gray-700 rounded-md px-3 py-2 text-xs text-white focus:outline-none focus:border-amber-500 resize-none" 
            />
          </div>

          {/* Theme & Design Selection */}
          <div className="space-y-4 pt-3 border-t border-gray-800">
            <label className="text-xs font-bold uppercase tracking-wider text-amber-500 block">Visual Design Settings</label>
            
            {/* Theme picker */}
            <div>
              <span className="text-[10px] text-gray-400 block mb-1.5">Color Theme</span>
              <div className="grid grid-cols-2 gap-2">
                {Object.entries(THEMES).map(([key, value]) => (
                  <button
                    key={key}
                    onClick={() => setSelectedTheme(key as keyof typeof THEMES)}
                    className={`flex items-center gap-2 p-2 rounded-lg border text-left transition-all ${
                      selectedTheme === key 
                        ? "border-amber-500 bg-gray-900" 
                        : "border-gray-800 bg-gray-900/50 hover:bg-gray-900"
                    }`}
                  >
                    <span 
                      className="w-3.5 h-3.5 rounded-full border border-white/20 shrink-0" 
                      style={{ background: key === "ivory-gold" ? "#ffffff" : value.primaryColor }}
                    />
                    <span className="text-[10px] font-medium text-gray-200 truncate">{value.name}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* Layout selector */}
            <div>
              <span className="text-[10px] text-gray-400 block mb-1.5">Poster Layout</span>
              <div className="grid grid-cols-3 gap-1.5 bg-gray-900 p-1 rounded-lg border border-gray-800">
                {(["three-column", "split-screen", "centered"] as const).map((lay) => (
                  <button
                    key={lay}
                    onClick={() => setSelectedLayout(lay)}
                    className={`py-1.5 px-1 rounded text-[9px] uppercase font-bold tracking-wider text-center transition-all ${
                      selectedLayout === lay 
                        ? "bg-amber-500 text-black shadow" 
                        : "bg-transparent text-gray-400 hover:text-white"
                    }`}
                  >
                    {lay.replace("-", " ")}
                  </button>
                ))}
              </div>
            </div>

            {/* Border Style */}
            <div>
              <span className="text-[10px] text-gray-400 block mb-1.5">Border Style</span>
              <div className="grid grid-cols-4 gap-1 bg-gray-900 p-1 rounded-lg border border-gray-800">
                {(["royal-certificate", "classic-double", "floral-corners", "minimal"] as const).map((b) => (
                  <button
                    key={b}
                    onClick={() => setBorderStyle(b)}
                    className={`py-1.5 px-0.5 rounded text-[8px] uppercase font-bold tracking-wider text-center transition-all ${
                      borderStyle === b 
                        ? "bg-amber-500 text-black shadow" 
                        : "bg-transparent text-gray-400 hover:text-white"
                    }`}
                  >
                    {b === "royal-certificate" ? "Royal" : b.split("-")[0]}
                  </button>
                ))}
              </div>
            </div>

          </div>

        </div>

        {/* Action Button Bar */}
        <div className="mt-auto pt-6 border-t border-gray-800 flex flex-col gap-2">
          <button
            onClick={handleDownloadPng}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-amber-500 hover:bg-amber-600 px-4 py-2.5 text-xs font-bold text-black shadow-lg hover:shadow-amber-500/20 hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Download className="h-4 w-4" /> Download High-Res PNG
          </button>
          
          <button
            onClick={() => window.print()}
            className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-gray-800 hover:bg-gray-700 px-4 py-2.5 text-xs font-bold text-white hover:scale-[1.02] active:scale-[0.98] transition-all"
          >
            <Printer className="h-4 w-4" /> Print or Save as PDF
          </button>
        </div>

      </aside>

      {/* ==========================================
          RIGHT: LIVE POSTER PREVIEW PANE
          ========================================== */}
      <main className="flex-1 bg-[#0b0f19] flex items-center justify-center p-4 md:p-8 overflow-auto min-h-[500px]">
        
        {/* Scale Container to wrap the poster */}
        <div className="w-full max-w-[1154px] flex flex-col items-center gap-4">
          
          <div className="no-print flex items-center justify-between w-full text-xs text-gray-400 px-2">
            <span className="flex items-center gap-1"><Sparkles className="h-3.5 w-3.5 text-amber-500" /> Interactive Poster Preview (A4 Landscape aspect)</span>
            <span>A4 Print Size: 297mm x 210mm</span>
          </div>

          {/* ===== RESPONSIVE WRAPPER ENABLING SCALE WITHOUT CLIPPING ===== */}
          <div 
            ref={containerRef} 
            className="w-full flex justify-center items-center overflow-hidden border border-gray-800/50 rounded-xl bg-black/40 shadow-inner px-2 py-4 no-print"
            style={{ height: `${794 * scale + 32}px` }}
          >
            <div 
              style={{
                transform: `scale(${scale})`,
                transformOrigin: "center center",
                width: "1122px",
                height: "794px",
              }}
              className="shrink-0"
            >
              <PosterBody 
                posterRef={posterRef} 
                themeConfig={themeConfig} 
                borderStyle={borderStyle}
                trustName={trustName}
                collegeName={collegeName}
                tagline={tagline}
                departmentName={departmentName}
                achievementTitle={achievementTitle}
                achievementSubtitle={achievementSubtitle}
                selectedLayout={selectedLayout}
                names={names}
                centerImage={centerImage}
                imageFit={imageFit}
                quoteContent={quoteContent}
                setCollegeName={setCollegeName}
                setDepartmentName={setDepartmentName}
                setAchievementTitle={setAchievementTitle}
                setAchievementSubtitle={setAchievementSubtitle}
                setQuoteContent={setQuoteContent}
                setNames={setNames}
              />
            </div>
          </div>

          {/* Hidden element for printing - maps 1:1 to paper without scale */}
          <div className="hidden print:block absolute inset-0">
            <PosterBody 
              posterRef={posterRef} 
              themeConfig={themeConfig} 
              borderStyle={borderStyle}
              trustName={trustName}
              collegeName={collegeName}
              tagline={tagline}
              departmentName={departmentName}
              achievementTitle={achievementTitle}
              achievementSubtitle={achievementSubtitle}
              selectedLayout={selectedLayout}
              names={names}
              centerImage={centerImage}
              imageFit={imageFit}
              quoteContent={quoteContent}
            />
          </div>

          {/* Quick Guidance Alert for downloads */}
          <div className="no-print w-full flex items-start gap-2 bg-blue-950/20 border border-blue-900/40 rounded-lg p-3.5 text-xs text-blue-200">
            <span className="font-bold text-blue-400 shrink-0 select-none">Tip:</span>
            <p className="leading-relaxed">
              To save as PDF, click <strong>"Print or Save as PDF"</strong>, set the orientation to <strong>Landscape</strong>, paper size to <strong>A4</strong>, and turn off "Headers and footers".
            </p>
          </div>

        </div>

      </main>

    </div>
    </div>
  );
}

// ==========================================
// SEPARATED POSTER COMPONENT
// ==========================================

interface PosterBodyProps {
  posterRef: React.RefObject<HTMLDivElement | null>;
  themeConfig: typeof THEMES[keyof typeof THEMES];
  borderStyle: "royal-certificate" | "classic-double" | "floral-corners" | "minimal";
  trustName: string;
  collegeName: string;
  tagline: string;
  departmentName: string;
  achievementTitle: string;
  achievementSubtitle: string;
  selectedLayout: "three-column" | "split-screen" | "centered";
  names: NameRow[];
  centerImage: string;
  imageFit: "cover" | "contain";
  quoteContent: string;
  setCollegeName?: (val: string) => void;
  setDepartmentName?: (val: string) => void;
  setAchievementTitle?: (val: string) => void;
  setAchievementSubtitle?: (val: string) => void;
  setQuoteContent?: (val: string) => void;
  setNames?: (names: NameRow[]) => void;
}

function PosterBody({
  posterRef,
  themeConfig,
  borderStyle,
  trustName,
  collegeName,
  tagline,
  departmentName,
  achievementTitle,
  achievementSubtitle,
  selectedLayout,
  names,
  centerImage,
  imageFit,
  quoteContent,
  setCollegeName,
  setDepartmentName,
  setAchievementTitle,
  setAchievementSubtitle,
  setQuoteContent,
  setNames
}: PosterBodyProps) {
  return (
    <div
      id="poster-element"
      ref={posterRef}
      className={`a4-sheet relative shadow-elegant overflow-hidden select-none`}
      style={{ 
        background: themeConfig.bgGradient,
        width: "1122px",
        height: "794px",
      }}
    >
      {/* Background Texture Overlay */}
      <div className="absolute inset-0 opacity-[0.03] pointer-events-none mix-blend-overlay"
        style={{
          backgroundImage: `radial-gradient(circle at 50% 50%, #000 10%, transparent 10.2%), radial-gradient(circle at 0 0, #000 5%, transparent 5.2%)`,
          backgroundSize: '24px 24px'
        }}
      />

      {/* Corner Decorative Ribbons/Brackets based on style */}
      {borderStyle === "royal-certificate" && (
        <div className="absolute inset-6 border-[3px] pointer-events-none rounded-md" style={{ borderColor: themeConfig.goldBorder }}>
          <div className="absolute inset-1.5 border pointer-events-none opacity-70 rounded-sm" style={{ borderColor: themeConfig.goldBorder }} />
          {/* Corner decorations */}
          <div className="absolute top-0 left-0 w-8 h-8 border-r border-b opacity-85" style={{ borderColor: themeConfig.goldBorder }} />
          <div className="absolute top-0 right-0 w-8 h-8 border-l border-b opacity-85" style={{ borderColor: themeConfig.goldBorder }} />
          <div className="absolute bottom-0 left-0 w-8 h-8 border-r border-t opacity-85" style={{ borderColor: themeConfig.goldBorder }} />
          <div className="absolute bottom-0 right-0 w-8 h-8 border-l border-t opacity-85" style={{ borderColor: themeConfig.goldBorder }} />
        </div>
      )}

      {borderStyle === "classic-double" && (
        <div className="absolute inset-5 border-4 pointer-events-none rounded" style={{ borderColor: themeConfig.goldBorder }}>
          <div className="absolute inset-1 border-2 pointer-events-none opacity-80 rounded" style={{ borderColor: themeConfig.goldBorder }} />
        </div>
      )}

      {borderStyle === "floral-corners" && (
        <>
          <div className="absolute top-6 left-6 w-16 h-16 border-t-4 border-l-4 pointer-events-none rounded-tl-lg" style={{ borderColor: themeConfig.goldBorder }} />
          <div className="absolute top-6 right-6 w-16 h-16 border-t-4 border-r-4 pointer-events-none rounded-tr-lg" style={{ borderColor: themeConfig.goldBorder }} />
          <div className="absolute bottom-6 left-6 w-16 h-16 border-b-4 border-l-4 pointer-events-none rounded-bl-lg" style={{ borderColor: themeConfig.goldBorder }} />
          <div className="absolute bottom-6 right-6 w-16 h-16 border-b-4 border-r-4 pointer-events-none rounded-br-lg" style={{ borderColor: themeConfig.goldBorder }} />
        </>
      )}

      {borderStyle === "minimal" && (
        <div className="absolute inset-6 border-2 pointer-events-none opacity-60 rounded" style={{ borderColor: themeConfig.goldBorder }} />
      )}

      {/* Inner Content Padding */}
      <div className="a4-inner flex flex-col justify-between h-full relative z-10 px-12 py-10">
        
        {/* ============ HEADER COMPONENT ============ */}
        <header className="flex items-center justify-between gap-6 border-b-2 pb-4" style={{ borderColor: `${themeConfig.goldBorder}50` }}>
          {/* Left Slot: SREC Logo Container (Cropped to Shield Crest Only) */}
          <div style={{ width: "240px" }} className="flex justify-start items-center shrink-0">
            <div style={{ width: "125px", height: "105px", overflow: "hidden", position: "relative" }} className="rounded-md shrink-0 filter drop-shadow-sm animate-fade-up">
              <img 
                src={srecLogoImg} 
                alt="SREC Logo" 
                style={{ 
                  width: "355px", // Scale width proportionally to height to crop text
                  height: "105px", 
                  maxWidth: "none",
                  position: "absolute",
                  left: "0px",
                  top: "0px",
                  objectFit: "cover",
                  objectPosition: "left"
                }} 
              />
            </div>
          </div>

          {/* Center Slot: College Name (Mathematically Centered) */}
          <div className="text-center flex-1 min-w-0">
            <h1 
              contentEditable={!!setCollegeName}
              suppressContentEditableWarning
              onBlur={(e) => setCollegeName?.(e.currentTarget.textContent || "")}
              className="font-display text-2xl md:text-3.5xl lg:text-4.2xl font-black tracking-wide leading-none text-[#0b301c] drop-shadow-sm outline-none focus:ring-1 focus:ring-amber-500/40 rounded px-1 transition-all"
            >
              {collegeName}
            </h1>
            {departmentName && (
              <div className="mt-3 inline-block bg-[#0b301c]/10 border border-[#0b301c]/25 rounded px-4 py-1">
                <span 
                  contentEditable={!!setDepartmentName}
                  suppressContentEditableWarning
                  onBlur={(e) => setDepartmentName?.(e.currentTarget.textContent || "")}
                  className="text-[11px] md:text-xs font-extrabold uppercase tracking-[0.2em] text-[#0b301c] outline-none focus:ring-1 focus:ring-amber-500/40 rounded px-1 transition-all"
                >
                  {departmentName}
                </span>
              </div>
            )}
          </div>

          {/* Right Slot: SNR Logo Container (Smaller) */}
          <div style={{ width: "240px" }} className="flex justify-end items-center shrink-0">
            <img 
              src={snrLogoImg} 
              alt="SNR Trust Logo" 
              style={{ width: "80px", height: "80px", minWidth: "80px", minHeight: "80px", objectFit: "contain" }} 
              className="shrink-0 filter drop-shadow-sm" 
            />
          </div>
        </header>

        {/* ============ MIDDLE BODY (DYNAMIC LAYOUTS) ============ */}
        <div className="flex-1 my-6 flex flex-col justify-center min-h-0">
          
          {/* Big Congratulations Title Banner */}
          <div className="text-center mb-6">
            <h2 className="font-display text-4xl md:text-5xl font-black tracking-[0.18em] leading-none uppercase text-gray-900 flex items-center justify-center gap-3">
              <Sparkles className="h-8 w-8 text-amber-500 animate-sparkle shrink-0" />
              <span 
                contentEditable={!!setAchievementTitle}
                suppressContentEditableWarning
                onBlur={(e) => setAchievementTitle?.(e.currentTarget.textContent || "")}
                className="text-gold-gradient outline-none focus:ring-1 focus:ring-amber-500/40 rounded px-1 transition-all"
              >
                {achievementTitle}
              </span>
              <Sparkles className="h-8 w-8 text-amber-500 animate-sparkle shrink-0" />
            </h2>
            <p 
              contentEditable={!!setAchievementSubtitle}
              suppressContentEditableWarning
              onBlur={(e) => setAchievementSubtitle?.(e.currentTarget.textContent || "")}
              className="text-sm md:text-base text-gray-700 font-bold tracking-wider mt-2.5 truncate max-w-[85%] mx-auto uppercase outline-none focus:ring-1 focus:ring-amber-500/40 rounded px-1 transition-all"
            >
              {achievementSubtitle}
            </p>
          </div>

          {/* -------------------- LAYOUT 1: THREE COLUMN -------------------- */}
          {selectedLayout === "three-column" && (
            <div className="grid grid-cols-12 gap-6 flex-1 items-center min-h-0">
              
              {/* Left Column: Winners (White background card) */}
              <div className="col-span-3 flex flex-col h-full justify-center min-h-0">
                <div className={`rounded-xl border p-5 flex flex-col h-auto justify-center ${themeConfig.cardBg}`}>
                  <div className="flex items-center gap-1.5 border-b pb-2 mb-3 border-gray-200/80">
                    <Award className="h-5 w-5 text-[#b59410]" />
                    <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-[#b59410]">Honorees</span>
                  </div>
                  <div className="space-y-3 overflow-y-auto pr-1.5 flex flex-col justify-center min-h-0">
                    {names.map((n, i) => (
                      <div key={n.id || i} className="border-l-4 pl-3 text-left border-[#b59410]">
                        <p 
                          contentEditable={!!setNames}
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const updated = [...names];
                            updated[i] = { ...updated[i], name: e.currentTarget.textContent || "" };
                            setNames?.(updated);
                          }}
                          className="text-sm font-extrabold text-gray-900 tracking-wide uppercase leading-snug wrap-break-word whitespace-normal outline-none focus:ring-1 focus:ring-amber-500/40 rounded px-1 transition-all"
                        >
                          {n.name}
                        </p>
                        <p 
                          contentEditable={!!setNames}
                          suppressContentEditableWarning
                          onBlur={(e) => {
                            const updated = [...names];
                            updated[i] = { ...updated[i], detail: e.currentTarget.textContent || "" };
                            setNames?.(updated);
                          }}
                          className="text-xs text-gray-500 font-medium wrap-break-word whitespace-normal leading-normal mt-1 outline-none focus:ring-1 focus:ring-amber-500/40 rounded px-1 transition-all"
                        >
                          {n.detail}
                        </p>
                      </div>
                    ))}
                    {names.length === 0 && (
                      <span className="text-[11px] text-gray-400 text-center italic">No achievers listed</span>
                    )}
                  </div>
                </div>
              </div>

              {/* Center Column: ONE IMAGE AT CENTER (Gold frame - Bigger) */}
              <div className="col-span-6 flex justify-center items-center h-full min-h-0">
                <div className="relative rounded-xl overflow-hidden border-4 shadow-xl w-full max-w-[480px] aspect-4/3 flex items-center justify-center bg-gray-100" style={{ borderColor: themeConfig.goldBorder }}>
                  {centerImage ? (
                    <img
                      src={centerImage}
                      alt="Central Honoree Photo"
                      className="w-full h-full select-none"
                      style={{ objectFit: imageFit }}
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 p-6 text-gray-400">
                      <ImageIcon className="h-12 w-12 text-gray-300" />
                      <span className="text-xs italic">No image uploaded</span>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-linear-to-t from-black/30 via-transparent to-transparent pointer-events-none" />
                </div>
              </div>

              {/* Right Column: Quotes (White background card, big quotes) */}
              <div className="col-span-3 flex flex-col h-full justify-center min-h-0">
                <div className={`rounded-xl border p-5 relative h-auto flex flex-col justify-center text-center ${themeConfig.cardBg}`}>
                  <span className="absolute top-2 left-3 font-serif text-[64px] leading-none text-[#b59410]/20 select-none">“</span>
                  <div className="grow flex items-center justify-center px-1 py-4">
                    <p className="italic text-xs lg:text-[13.5px] leading-relaxed text-gray-800 font-semibold tracking-wide font-sans">
                      <span>“</span>
                      <span 
                        contentEditable={!!setQuoteContent}
                        suppressContentEditableWarning
                        onBlur={(e) => setQuoteContent?.(e.currentTarget.textContent || "")}
                        className="outline-none focus:ring-1 focus:ring-amber-500/40 rounded px-1 transition-all mx-0.5"
                      >
                        {quoteContent || "Quotes and content will reflect here."}
                      </span>
                      <span>”</span>
                    </p>
                  </div>
                  <span className="absolute bottom-[-15px] right-3 font-serif text-[64px] leading-none text-[#b59410]/20 select-none">”</span>
                </div>
              </div>

            </div>
          )}

          {/* -------------------- LAYOUT 2: SPLIT SCREEN -------------------- */}
          {selectedLayout === "split-screen" && (
            <div className="grid grid-cols-2 gap-8 flex-1 items-center min-h-0">
              
              {/* Left Split: Central Image */}
              <div className="flex justify-center items-center h-full min-h-0">
                <div className="relative rounded-xl overflow-hidden border-4 shadow-xl w-full max-w-[440px] aspect-4/3 flex items-center justify-center bg-gray-100" style={{ borderColor: themeConfig.goldBorder }}>
                  {centerImage ? (
                    <img
                      src={centerImage}
                      alt="Central Honoree Photo"
                      className="w-full h-full select-none"
                      style={{ objectFit: imageFit }}
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 p-6 text-gray-400">
                      <ImageIcon className="h-12 w-12 text-gray-300" />
                      <span className="text-xs italic">No image uploaded</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Right Split: Names + Quotes */}
              <div className="flex flex-col justify-center gap-4 h-full min-h-0">
                
                {/* Honorees block */}
                <div className={`rounded-xl border p-4 flex-1 flex flex-col justify-center min-h-0 ${themeConfig.cardBg}`}>
                  <div className="flex items-center gap-1.5 border-b pb-2 mb-2 border-gray-200/80">
                    <Award className="h-5 w-5 text-[#b59410]" />
                    <span className="text-xs md:text-sm font-extrabold uppercase tracking-wider text-[#b59410]">Honorees</span>
                  </div>
                  <div className="grid grid-cols-2 gap-3 overflow-y-auto flex-1 content-center">
                    {names.map((n, i) => (
                      <div key={n.id || i} className="border-l-4 pl-3 text-left border-[#b59410]">
                        <p className="text-sm font-extrabold text-gray-900 tracking-wide uppercase leading-snug wrap-break-word whitespace-normal">{n.name}</p>
                        <p className="text-xs text-gray-500 font-medium wrap-break-word whitespace-normal leading-normal mt-1">{n.detail}</p>
                      </div>
                    ))}
                    {names.length === 0 && (
                      <span className="text-xs text-gray-400 col-span-2 text-center italic">No achievers listed</span>
                    )}
                  </div>
                </div>

                {/* Quote block */}
                <div className={`rounded-xl border p-4 relative h-[100px] shrink-0 flex items-center justify-center text-center ${themeConfig.cardBg}`}>
                  <span className="absolute top-1 left-3 font-serif text-[48px] leading-none text-[#b59410]/20 select-none">“</span>
                  <p className="italic text-xs md:text-sm leading-relaxed text-gray-800 font-semibold tracking-wide font-sans px-4 truncate max-w-full">
                    {quoteContent ? `“${quoteContent}”` : `“Quotes and content will reflect here.”`}
                  </p>
                  <span className="absolute bottom-[-15px] right-3 font-serif text-[48px] leading-none text-[#b59410]/20 select-none">”</span>
                </div>

              </div>

            </div>
          )}

          {/* -------------------- LAYOUT 3: CENTERED STACKING -------------------- */}
          {selectedLayout === "centered" && (
            <div className="flex flex-col items-center justify-center flex-1 gap-4 min-h-0">
              
              {/* Centered Image */}
              <div className="flex justify-center items-center min-h-0">
                <div className="relative rounded-xl overflow-hidden border-4 shadow-xl w-[380px] aspect-video flex items-center justify-center bg-gray-100" style={{ borderColor: themeConfig.goldBorder }}>
                  {centerImage ? (
                    <img
                      src={centerImage}
                      alt="Central Honoree Photo"
                      className="w-full h-full select-none"
                      style={{ objectFit: imageFit }}
                    />
                  ) : (
                    <div className="flex flex-col items-center gap-2 p-6 text-gray-400">
                      <ImageIcon className="h-10 w-10 text-gray-300" />
                      <span className="text-xs italic">No image uploaded</span>
                    </div>
                  )}
                </div>
              </div>

              {/* Stacking Rows: Names & Quotes side-by-side */}
              <div className="grid grid-cols-12 gap-4 w-full max-w-[90%] items-center flex-1 min-h-0">
                {/* Left stack: Names */}
                <div className={`col-span-6 rounded-xl border p-4 h-full flex flex-col justify-center min-h-0 ${themeConfig.cardBg}`}>
                  <div className="flex flex-wrap gap-x-6 gap-y-2.5 justify-center overflow-y-auto max-h-[100px] py-1.5">
                    {names.map((n, i) => (
                      <div key={n.id || i} className="text-center min-w-[120px] max-w-[160px]">
                        <p className="text-sm font-extrabold text-gray-900 tracking-wide uppercase leading-snug wrap-break-word whitespace-normal">{n.name}</p>
                        <p className="text-xs text-[#b59410] font-extrabold wrap-break-word whitespace-normal leading-normal mt-1 uppercase">{n.detail}</p>
                      </div>
                    ))}
                    {names.length === 0 && (
                      <span className="text-xs text-gray-400 italic">No honorees listed</span>
                    )}
                  </div>
                </div>

                {/* Right stack: Quote */}
                <div className={`col-span-6 rounded-xl border p-4 h-full relative flex items-center justify-center text-center ${themeConfig.cardBg}`}>
                  <span className="absolute top-1 left-3 font-serif text-[48px] leading-none text-[#b59410]/20 select-none">“</span>
                  <div className="overflow-y-auto max-h-[90px] px-3 flex items-center justify-center">
                    <p className="italic text-xs md:text-sm leading-normal text-gray-800 font-semibold tracking-wide font-sans">
                      {quoteContent ? `“${quoteContent}”` : `“Quotes and content will reflect here.”`}
                    </p>
                  </div>
                  <span className="absolute bottom-[-15px] right-3 font-serif text-[48px] leading-none text-[#b59410]/20 select-none">”</span>
                </div>
              </div>

            </div>
          )}

        </div>
    </div>
    </div>
  );
}
