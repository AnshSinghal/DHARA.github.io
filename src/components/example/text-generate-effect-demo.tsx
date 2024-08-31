"use client";
import { TextGenerateEffect } from "../ui/text-generate-effect";

const words = `Oxygen gets you high. In a catastrophic emergency, we're taking giant, panicked breaths. Suddenly you become euphoric, docile. You accept your fate. It's all right here. Emergency water landing, six hundred miles an hour. Blank faces, calm as Hindu cows
`;

export default function TextGenerateEffectDemo() {
  return <TextGenerateEffect words={words} />;
}
