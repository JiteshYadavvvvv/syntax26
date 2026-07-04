import ChromaGrid from './ChromaGrid';

const mentors = [
  {
    image: "/mentors/palak.webp",
    title: "Palak kumari",
    subtitle: "GDG Secretary",
    handle: "@.pala__k",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
    url: "https://www.instagram.com/_.pala__k/"
  },
  {
    image: "/mentors/peyush.jpg",
    title: "Peush Yadav",
    subtitle: "GDG Secretary",
    handle: "@peush_btw",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg, #10B981, #000)",
    url: "https://www.instagram.com/peush_btw/"
  },
  {
    image: "/mentors/annu.webp",
    title: "Annu Kumari",
    subtitle: "UI/UX Designer",
    handle: "@verifiedoutrage",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4, #000)",
    url: "https://www.instagram.com/verifiedoutrage/"
  },

  {
    image: "/mentors/peyush.jpg",
    title: "Deepak Baliyan",
    subtitle: "UI/UX Designer",
    handle: "@deepakbaliyan04",
    borderColor: "#06B6D4",
    gradient: "linear-gradient(135deg, #06B6D4, #000)",
    url: "https://www.instagram.com/deepakbaliyan04/"
  },

  {
    image: "/mentors/pratap.webp",
    title: "Aryan Pratap Singh",
    subtitle: "Full Stack Developer",
    handle: "@aryan_32__1",
    borderColor: "#10B981",
    gradient: "linear-gradient(210deg, #10B981, #000)",
    url: "https://www.instagram.com/aryan_32__1/"
  },

  {
    image: "/mentors/ashu.webp",
    title: "Ashutosh Mishra",
    subtitle: "Blockchain Specialist",
    handle: "@ashum_9 ",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg, #8B5CF6, #000)",
    url: "https://www.instagram.com/ashum_9/"
  },
  {
    image: "/mentors/asrh.webp",
    title: "Arsh Tiwari",
    subtitle: "App dev specialist",
    handle: "@mr_arshtiwari",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg, #F59E0B, #000)",
    url: "https://www.instagram.com/mr_arshtiwari/"
  },
  {
    image: "/mentors/praanva.webp",
    title: "Pranav Patil",
    subtitle: "Ai/ML Specialist",
    handle: "@pan._av ",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
    url: "https://www.instagram.com/pan._av/"
  },


  {
    image: "/mentors/sreyash.webp",
    title: "Sreyash Singh",
    subtitle: "Flutter Specialist",
    handle: "@sreyashsingh2024",
    borderColor: "#8B5CF6",
    gradient: "linear-gradient(225deg, #8B5CF6, #000)",
    url: "https://www.instagram.com/sreyashsingh2024/"
  },
  {
    image: "/mentors/raj.webp",
    title: "Raj Singh Rajput",
    subtitle: "App dev specialist",
    handle: "@rajsinghrajput980",
    borderColor: "#F59E0B",
    gradient: "linear-gradient(165deg, #F59E0B, #000)",
    url: "https://www.instagram.com/rajsinghrajput980/"
  },
  {
    image: "/mentors/abhishek.webp",
    title: "Abhishek Dabbas",
    subtitle: "Full Stack Developer",
    handle: "@ok.abhishek_",
    borderColor: "#4F46E5",
    gradient: "linear-gradient(145deg, #4F46E5, #000)",
    url: "https://www.instagram.com/ok.abhishek_/"
  },

  {
    image: "/mentors/aryan-singh.webp",
    title: "Aryanm Singh",
    subtitle: "Full Stack Developer",
    handle: "@aryancheers",
    borderColor: "#EF4444",
    gradient: "linear-gradient(195deg, #EF4444, #000)",
    url: "https://www.instagram.com/aryancheers/"
  }


];

export const Mentors = () => {
  return (
    <section
      id="mentors"
      className="relative w-full max-w-[1400px] mx-auto scroll-mt-10 px-6 pt-24 pb-8 text-white"
    >
      <div className="mb-16 text-center">
        <h2 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-4 text-white">
          Meet the <span className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4 text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-blue-600">
            Mentors</span>
        </h2>
      </div>

      <div className="relative min-h-[600px] sm:min-h-[900px]">
        <ChromaGrid
          items={mentors}
          radius={320}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
        />
      </div>
    </section>
  );
};
