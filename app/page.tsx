import Image from "next/image";
import NavBar from "@/components/NavBar";

export default function Home() {
  const logos = [
    { src: "/images/GaganVedhi.png", alt: "GaganVedhi", width: 500, height: 500 },
    { src: "/images/Celestic.webp", alt: "Celestic", width: 500, height: 500 },
  ];

  return (
    <>
      <div className="full-background">
        <div className="container">
          <div className="logos">
            <Image src={logos[0].src} alt={logos[0].alt} width={logos[0].width} height={logos[0].height} />
          </div>

          <div className="mainlogo">
            <Image
              src="/images/Aethereum.png"
              alt="Aethereum"
              width={400}
              height={100}
            />
          </div>

          <div className="logos">
            <Image src={logos[1].src} alt={logos[1].alt} width={logos[1].width} height={logos[1].height} />
          </div>
        </div>

        <div className="mobile">
          <div className="mainlogo">
            <Image
              src="/images/Aethereum.png"
              alt="Aethereum"
              width={300}
              height={100}
            />
          </div>
          <div className="bottom-row">
            {logos.map((logo, index) => (
              <div key={index} className="logos">
                <Image src={logo.src} alt={logo.alt} width={logo.width} height={logo.height} />
              </div>
            ))}
          </div>
        </div>

        <div className="title flex items-center justify-center">
          ÆTHEREUM 3.0
        </div>
        <div className="flex items-center justify-center">
          <div className="text w-[80vw]">
            Here, we celebrate the vastness of Astronomy and how it infiltrates every area of science. We try to encapsulate in this fest, the very interdisciplinary nature of Astronomy in Art as well as Science. Therefore, we host a range of programmes from talks by eminent researchers, workshops as well as lively debates, art contests and much more in collaboration with our various science and art clubs.
          </div>
        </div>
      </div>
    </>
  );
}
