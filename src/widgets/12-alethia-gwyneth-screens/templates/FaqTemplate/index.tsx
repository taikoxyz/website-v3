import React from "react";
import css from "./FaqTemplate.module.scss";
import Accordion from "shared/ui/Accordion";
import clsx from "clsx";
import { FaqData } from "shared/lib/types/alethia-gwyneth.types";
import { BlocksRenderer } from "@strapi/blocks-react-renderer";

interface Props {
    title: string;
    text: string;
    questions: FaqData[];
}

export const FaqTemplate: React.FC<Props> = ({
    questions,
    text,
    title
}) => {
    return (
        <div className={css.faq}>
            <div className="container">
                <div className={css.faq_wrapper}>
                    <div className={css.faq_left}>
                        <h2 className={css.faq_title}>{title}</h2>
                        <p className={css.faq_text}>{text}</p>
                    </div>
                    <div className={css.faq_questions}>
                        {questions.map((question) => (
                            <Accordion 
                                className={css.question}
                                key={question.question + question.answer}
                                closeOnClickOut
                                smooth
                            >
                                {({ active }) => (
                                    <React.Fragment>
                                        <Accordion.Button>
                                            <button className={clsx(css.question_button, active && css._active)}>
                                                {question.question}
                                                <span></span>
                                            </button>
                                        </Accordion.Button>
                                        <Accordion.Content>
                                            <div className={css.question_content}>
                                                <BlocksRenderer content={question.answer} />
                                            </div>
                                        </Accordion.Content>
                                    </React.Fragment>
                                )}
                            </Accordion>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};    