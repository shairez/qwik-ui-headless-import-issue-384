import { component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { AccordionContent, AccordionHeader, AccordionItem, AccordionRoot, AccordionTrigger } from "@qwik-ui/headless";

export default component$(() => {
  return (
    <>
      <div onClick$={() => console.log('HEY')}>
        <AccordionRoot class="accordion-wrapper" animated>
          <AccordionItem>
            <AccordionHeader>
              <AccordionTrigger class="accordion-trigger">
                <span>Can I add headings inside the accordion?</span>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent class="accordion-content">
              <p>
                Yes, if you wrap the AccordionHeader component around the trigger,
                screen readers will announce it properly.
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader>
              <AccordionTrigger class="accordion-trigger">
                <span>Is it easy to animate?</span>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent class="accordion-content">
              <p>
                Yup! You can even use animations or CSS transitions using the{' '}
                <strong>animated</strong> prop on the accordion root!
              </p>
            </AccordionContent>
          </AccordionItem>
          <AccordionItem>
            <AccordionHeader>
              <AccordionTrigger class="accordion-trigger">
                <span>How about opening multiple items at once?</span>
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent class="accordion-content">
              <p>
                You can do that by setting the <strong>behavior</strong> prop to
                "multi" on the Accordion
              </p>
            </AccordionContent>
          </AccordionItem>
        </AccordionRoot>
      </div>


    </>
  );
});

export const head: DocumentHead = {
  title: "Welcome to Qwik",
  meta: [
    {
      name: "description",
      content: "Qwik site description",
    },
  ],
};
