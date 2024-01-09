import { lora } from "@/app/layout";
import { cn } from "@/lib/utils";

const aboutData = [
  {
    id: "1",
    image: "https://github.com/shadcn.png",
    name: "Alex",
    description:
      "Welcome to our animal shelter We are an organization that aims to help homeless animals find loving families and provide them with all the necessary care and attention",
  },
  {
    id: "2",
    image: "https://github.com/shadcn.png",
    name: "Lesie",
    description:
      "Our shelter is located in a cozy place with well-equipped facilities. We have spacious rooms where animals can play, rest, and receive necessary medical care and hygiene. Our shelter also has a separate area for animals that require isolated living, such as those receiving treatment or temporarily under supervision",
  },
  {
    id: "3",
    image: "https://github.com/shadcn.png",
    name: "Frank",
    description:
      "We provide our animals with regular feeding. water supply, and necessary medical care. In addition, we ensure that our wards are socialized and ready to find their home",
  },
  {
    id: "4",
    image: "https://github.com/shadcn.png",
    name: "April",
    description:
      "If you want to adopt an animal from us, we will be happy to help you choose your favorite. We conduct animal temperament testing and offer recommendations for care and socialization. We also harmonious and healthy home for their new pets",
  },
  {
    id: "5",
    image: "https://github.com/shadcn.png",
    name: "Sophie",
    description:
      "Contact us if you have any questions about our shelter, if you want to learn more about the adoption process, or if you want to donate to our shelter",
  },
];

const AboutSection = () => {
  return (
    <div className="bg-white relative px-5 lg:px-[120px]">
      <div className="py-16 space-y-10">
        <h1
          className={cn(
            lora.className,
            "text-3xl font-semibold text-center text-primary"
          )}
        >
          About us
        </h1>

        <div className="border max-w-3xl mx-auto flex flex-col gap-4">
          {aboutData?.map((data) => {
            return <div key={data?.id}></div>;
          })}
        </div>
      </div>
    </div>
  );
};

export { AboutSection };
