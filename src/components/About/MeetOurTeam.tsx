"use client";

import Container from "../Container";
import TeamFlipCard from "./TeamFlipCard";
import { useTranslations } from "next-intl";
import { useQuery } from "@tanstack/react-query";
import { getAllProfessionals } from "@/lib/api";

const MeetOurTeam = () => {
  const t = useTranslations("About");
  const { data: professionals } = useQuery<ApiResponse<Professional[]>>({
    queryKey: ["professionals"],
    queryFn: getAllProfessionals,
  });

  return (
    <section className="relative z-10 flex flex-col items-center">
      <Container>
        <div className="max-w-[463px] mx-auto font-bold text-[#764af1] text-xl text-center tracking-[1.60px] leading-[30px]">
          {t("meetOurTeamTitle")}
        </div>
        <h2 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mt-2">
          {t("meetOurTeamHeading")}
        </h2>
        <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-lg text-center tracking-[0] leading-[27px] mt-6">
          {t("meetOurTeamDescription")}
        </p>
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-12 w-full">
          {professionals?.data.map((member: Professional, index: number) => (
            <TeamFlipCard
              key={index}
              image={member.image}
              name={member.name}
              role={member.position}
              description={member.description || ""}
            />
          ))}
        </div>
      </Container>
    </section>
  );
};

export default MeetOurTeam;
