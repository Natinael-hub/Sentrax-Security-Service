import Image from "next/image";

export default function Logo({ size = 44 }: { size?: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="relative" style={{ width: size, height: size }}>
        <Image
          src="/logo.png"
          alt="Sentrax Security Service logo"
          fill
          sizes={`${size}px`}
          className="object-contain"
          priority
        />
      </div>
      <div className="leading-tight">
        <div className="text-sm font-semibold tracking-wide">SENTRAX</div>
        <div className="text-[11px] text-fog tracking-wider">SECURITY SERVICE</div>
      </div>
    </div>
  );
}
