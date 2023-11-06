import { QwikIntrinsicElements, component$ } from "@builder.io/qwik";
import type { DocumentHead } from "@builder.io/qwik-city";

import { Tab, TabList, TabPanel, Tabs } from "@qwik-ui/headless";

export default component$(() => {
  return (
    <>
      <div >
      <Tabs behavior="automatic">
        <TabList>
          <Tab>Maria Ahlefeldt</Tab>
          <Tab>Carl Andersen</Tab>
          <Tab>Ida Henriette da Fonseca</Tab>
        </TabList>
        <TabPanel>
          <p>Maria Theresia Ahlefeldt (16 January 1755 - 20 December 1810) was a ...</p>
        </TabPanel>
        <TabPanel>
          <p>Carl Joachim Andersen (29 April 1847 - 7 May 1909) was a ...</p>
        </TabPanel>
        <TabPanel>
          <p>Ida Henriette da Fonseca (July 27, 1802 - July 6, 1858) was a ...</p>
        </TabPanel>
      </Tabs>
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



export function SVG(props: QwikIntrinsicElements['svg']) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1em"
      height="1em"
      viewBox="0 0 1024 1024"
      {...props}
    >
      <path
        fill="currentColor"
        d="M831.872 340.864L512 652.672L192.128 340.864a30.592 30.592 0 0 0-42.752 0a29.12 29.12 0 0 0 0 41.6L489.664 714.24a32 32 0 0 0 44.672 0l340.288-331.712a29.12 29.12 0 0 0 0-41.728a30.592 30.592 0 0 0-42.752 0z"
      ></path>
    </svg>
  );
}
