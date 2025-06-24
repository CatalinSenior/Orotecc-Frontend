import { cn } from "@/lib/utils";
import Image from "next/image";

interface TeamFlipCardProps extends React.HTMLAttributes<HTMLDivElement> {
  image: string;
  name: string;
  role: string;
  description: string;
  rotate?: "x" | "y";
}

export default function TeamFlipCard({
  image,
  name,
  role,
  description,
  rotate = "y",
  className,
  ...props
}: TeamFlipCardProps) {
  const rotationClass = {
    x: ["group-hover:[transform:rotateX(180deg)]", "[transform:rotateX(180deg)]"],
    y: ["group-hover:[transform:rotateY(180deg)]", "[transform:rotateY(180deg)]"],
  };
  const self = rotationClass[rotate];

  return (
    <div
      className={cn(
        "group h-[380px] sm:h-[350px] md:h-[500px] w-full sm:max-w-[459px] [perspective:1000px]",
        className
      )}
      {...props}
    >
      <div
        className={cn(
          "relative h-full rounded-2xl transition-all duration-500 [transform-style:preserve-3d]",
          self[0]
        )}
      >
        {/* Front */}
        <div className="absolute inset-0 [backface-visibility:hidden] rounded-xl border-4 md:border-8 border-[#f3f3f3] bg-white flex flex-col p-3 md:p-6 gap-3 md:gap-6 overflow-hidden">
  <div className="flex-1 relative w-full">
    <Image
      src={image}
      alt={name}
      fill
      className="object-cover rounded-[8px]"
    />
  </div>
  <div className="flex justify-between items-center">
    <div className="flex flex-col gap-1">
      <div className="text-md md:text-xl font-bold text-[#3b3f48]">{name}</div>
      <div className="text-base text-[#686E7B]">{role}</div>
    </div>
    <Image
      src="/team/refresh-cw.svg"
      alt="refresh"
      width={32}
      height={32}
      className="size-[24px] md:size-[32px]"
    />
  </div>
</div>


        {/* Back */}
        <div
          className={cn(
            "absolute h-full w-full [backface-visibility:hidden] rounded-[12px] border-4 md:border-8 border-solid border-[#f4f4f4] bg-white flex flex-col p-3 md:p-6 gap-4 md:gap-6",
            self[1]
          )}
        >
          <p className="text-base md:text-xl leading-normal">{description}</p>
          <div className="flex justify-between w-full items-end mt-auto">
            <div className="flex flex-col gap-1">
              <div className="text-md md:text-xl font-bold text-[#3b3f48]">{name}</div>
              <div className="text-base text-[#686E7B]">{role}</div>
            </div>
            <Image src="/team/refresh-cw.svg" alt="refresh" width={32} height={32} />
          </div>
        </div>
      </div>
    </div>
  );
}
