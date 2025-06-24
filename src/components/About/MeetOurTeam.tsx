import Container from "../Container";
import TeamFlipCard from "./TeamFlipCard";

type TeamMember = {
  name: string;
  role: string;
  imageSrc: string;
  description: string;
};

type MeetOurTeamProps = {
  teamMembers: TeamMember[];
};

const MeetOurTeam = ({ teamMembers }: MeetOurTeamProps) => (
  <section className="relative z-10 flex flex-col items-center">
    <Container>
    <div className="max-w-[463px] mx-auto font-bold text-[#764af1] text-xl text-center tracking-[1.60px] leading-[30px]">
      MEET OUR TEAM
    </div>
    <h2 className="max-w-[949px] mx-auto font-semibold text-[#3b3f48] text-3xl sm:text-4xl lg:text-5xl  text-center tracking-[0] lg:leading-[64.8px] mt-2">
      Passionate cloud technology experts
    </h2>
    <p className="max-w-[949px] mx-auto font-normal text-[#686e7b] text-lg text-center tracking-[0] leading-[27px] mt-6">
      Our skilled engineers, security specialists, and consultants are dedicated to your success.
    </p>
    <div className="grid grid-cols- grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 mt-12 w-full">
      {teamMembers.map((member, index) => (
        <TeamFlipCard
          key={index}
          image={member.imageSrc}
          name={member.name}
          role={member.role}
          description={member.description}
        />
      ))}
    </div>
    </Container>
  </section>
);

export default MeetOurTeam; 