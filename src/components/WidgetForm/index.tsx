import emoji from "../../assets/emoji.svg";
import emoji2 from "../../assets/emoji-1.svg";
import idea from "../../assets/Idea.svg";
import { useState } from "react";
import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContent } from "./Steps/FeedbackContentStep";
import { FeedbackSuccessStep } from "./Steps/FeedbackSuccess";

export const feedbackTypes = {
  BUG: {
    title: "Problema",
    image: {
      source: emoji,
      alt: "Imagem de um inseto",
    },
  },
  IDEA: {
    title: "Ideia",
    image: {
      source: idea,
      alt: "Imagem de lâmpada",
    },
  },
  OTHER: {
    title: "Outro",
    image: {
      source: emoji2,
      alt: "imagem de uma nuvem de pensamento",
    },
  },
};

export type FeedbackType = keyof typeof feedbackTypes;
//Object.entries(feedbackTypes) =>
/*
 *[
 *["BUG", {...}],
 *["IDEA", {...}],
 *["OTHER", {...}],
 *]
 */
export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);
  const [feedbackSent, setFeedbackSent] = useState(false);

  function handlebackTypeStep() {
    setFeedbackSent(false);
    setFeedbackType(null);
  }

  return (
    <div className="bg-zinc-900 p-4 relative rounded-2xl flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto">
      {feedbackSent ? (
        <FeedbackSuccessStep onFeedbackRestartRequested={handlebackTypeStep} />
      ) : (
        <>
          {!feedbackType ? (
            <FeedbackTypeStep onFeedbackTypeChanged={setFeedbackType} />
          ) : (
            <FeedbackContent
              feedbackType={feedbackType}
              onFeedbackRestartRequested={handlebackTypeStep}
              onFeedbackSent={() => setFeedbackSent(true)}
            />
          )}
        </>
      )}
      <footer className="text-ts text-neutral-400">
        Feito com ♥ pela
        <a
          href="https://www.rocketseat.com.br/"
          className="underline underline-offset-2"
        >
          {" "}
          RocketSeat
        </a>
      </footer>
    </div>
  );
}
