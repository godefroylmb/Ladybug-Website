import Image from "next/image";

export default function Footer() {
  return (
    <footer className="row-start-3 flex gap-6 items-center justify-center">
      <a
        href="https://www.linkedin.com/in/godefroy-lambert"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icon/linkedin.svg"
          alt="LinkedIn"
          width={32}
          height={32}
          className="hover:opacity-80 transition"
        />
      </a>
      <a
        href="https://github.com/godefroylmb/Ladybug-Website"
        target="_blank"
        rel="noopener noreferrer"
      >
        <Image
          src="/icon/github.svg"
          alt="GitHub"
          width={32}
          height={32}
          className="hover:opacity-80 transition"
        />
      </a>
      <a href="mailto:godefroy.work@gmail.com">
        <Image
          src="/icon/mail.svg"
          alt="Email"
          width={28}
          height={28}
          className="hover:opacity-80 transition"
        />
      </a>
    </footer>
  );
}
