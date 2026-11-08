import {
  SiPython,
  SiPostgresql,
  SiOpenbsd,
  SiRockylinux,
  SiMongodb,
  SiCockpit,
  SiAlpinelinux,
  SiUnraid,
  SiNextcloud,
  SiC,
  SiFedora,
  SiAmazonwebservices,
  SiDebian,
  SiYubico,
  SiGnuprivacyguard,
  SiPodman,
} from "react-icons/si";
import { FaWindows, FaLinux, FaDocker, FaReact } from "react-icons/fa";
import { GrOracle } from "react-icons/gr";
import { TbSql } from "react-icons/tb";

// Only the icons referenced by project "technologies" strings.
// Named imports (rather than importing the whole react-icons/* package) keep these tree-shakeable.
export const iconMap: Record<string, React.ComponentType> = {
  SiPython,
  SiPostgresql,
  SiOpenbsd,
  SiRockylinux,
  SiMongodb,
  SiCockpit,
  SiAlpinelinux,
  SiUnraid,
  SiNextcloud,
  SiC,
  SiFedora,
  SiAmazonwebservices,
  SiDebian,
  SiYubico,
  SiGnuprivacyguard,
  SiPodman,
  FaWindows,
  FaLinux,
  FaDocker,
  FaReact,
  GrOracle,
  TbSql,
};

export const getIconByName = (iconName: string) => {
  if (!iconName) return null;
  const IconComponent = iconMap[iconName];
  return IconComponent ? <IconComponent /> : null;
};

// Renders technology badges from a comma-separated string of icon names (e.g. "SiPython,FaReact").
export const TechBadges = ({ techString }: { techString?: string }) => {
  if (!techString) return null;

  const techs = techString.split(",").map((t) => t.trim());

  return (
    <div className="flex flex-wrap gap-2 mt-2">
      {techs.map((iconName, index) => {
        const icon = getIconByName(iconName);
        // Extract display name from icon name (e.g., "SiPython" -> "Python")
        const displayName = iconName.replace(/^(Si|Fa|Di)/, "");

        return icon ? (
          <span
            key={index}
            className="inline-flex items-center gap-1 px-3 py-1 bg-purple-600  text-fuchsia-100  rounded text-sm"
            title={displayName}
          >
            <span className="text-lg">{icon}</span>
            <span>{displayName}</span>
          </span>
        ) : null;
      })}
    </div>
  );
};
