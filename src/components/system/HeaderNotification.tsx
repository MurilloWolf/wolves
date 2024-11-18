"use client";
import { X } from "lucide-react";
import { useState } from "react";
import Link from "next/link";

type HeaderNotificationProps = {
  text: string;
  link?: {
    text: string;
    href: string;
  };
};

export default function HeaderNotification(props: HeaderNotificationProps) {
  const [isOpen, setIsOpen] = useState(true);
  const [transition, setTransition] = useState(false);
  const { text, link } = props;

  const handleClose = () => {
    setTransition(true);
    setTimeout(() => {
      setIsOpen(false);
    }, 100);
  };

  return (
    <>
      {isOpen && (
        <div
          className={`px-4 md:px-0 flex justify-center items-center w-full isolated bg-blue-500 text-white transition-all ease-in-out duration-300  ${
            transition ? "h-0" : "h-12"
          }`}
        >
          <p className="font-light text-sm cursor-pointer text-center">
            {text}
            {link && (
              <Link className="font-bold underline mx-1" href={link.href}>
                {link.text}
              </Link>
            )}
          </p>
          <X className="ml-2 h-4 cursor-pointer" onClick={handleClose} />
        </div>
      )}
    </>
  );
}
