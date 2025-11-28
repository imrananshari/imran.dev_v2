"use client";
import { useEffect } from "react";

export default function FaviconSetter() {
  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "anonymous";
    img.src = "/assets/imran dubai3.jpg";
    img.onload = () => {
      const canvas = document.createElement("canvas");
      const size = 32;
      canvas.width = size;
      canvas.height = size;
      const ctx = canvas.getContext("2d");
      if (!ctx) return;
      ctx.drawImage(img, 0, 0, size, size);
      const url = canvas.toDataURL("image/png");
      const setLink = (rel: string) => {
        let link = document.querySelector(`link[rel='${rel}']`) as HTMLLinkElement | null;
        if (!link) {
          link = document.createElement("link");
          link.rel = rel;
          document.head.appendChild(link);
        }
        link.type = "image/png";
        link.href = url;
      };
      setLink("icon");
      setLink("shortcut icon");
      const apple = document.querySelector("link[rel='apple-touch-icon']") as HTMLLinkElement | null;
      if (apple) apple.href = url;
    };
  }, []);
  return null;
}