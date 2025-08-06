'use client';

import { useLayoutEffect } from "react";
import { useRouter } from "next/navigation";

const approvedLinks: string[][][] = [
  //Coding and Devwork
  [
    //webdev
    [
      'https://vscode.dev/',
      'https://github.com/GameLord2011/My-Website/blob/main/app/repos/layout.tsx',
      'https://open.spotify.com/collection/tracks',
      'https://nextjs.org/docs/app/getting-started/fetching-data',
      'https://stackoverflow.com/search?q=opening+new+tabs+with+js',
      'https://tailwindcss.com/docs/background-clip',
      'https://en.wikipedia.org/wiki/HTML5#New_APIs'
    ],
    //Powershell
    [
      'https://learn.microsoft.com/en-us/powershell/scripting/whats-new/what-s-new-in-powershell-76?view=powershell-7.5',
      'https://github.com/GameLord2011/.dotfiles/blob/master/install.ps1',
      'https://open.spotify.com/collection/tracks',
      'https://learn.microsoft.com/en-us/windows/terminal/customize-settings/startup#behavior-when-starting-a-new-terminal-session',
    ]
  ],
  //random resarch!
  [
    //video game consoles
    [
      'https://en.wikipedia.org/wiki/TI-84_Plus_series#TI-84_Plus_CE-T_Python_Edition_and_TI-84_Plus_CE_Python',
      'https://en.wikipedia.org/wiki/Nuon_(DVD_technology)#Peripherals_and_accessories',
      'https://en.wikipedia.org/wiki/IQue_Player#Games',
      'https://open.spotify.com/collection/tracks',
      'https://en.wikipedia.org/wiki/FM_Towns_Marty#Technical_specifications'
    ],

    [
      'https://chatgpt.com/share/6893c98a-40e0-8009-9e2e-6b9f39e783f0',
      'https://open.spotify.com/collection/tracks'
    ]
  ]
];

export default function Home() {
  const router = useRouter();

  useLayoutEffect(() => {
    const subjectGroups = approvedLinks[Math.floor(Math.random() * approvedLinks.length)];
    const linkGroup = subjectGroups[Math.floor(Math.random() * subjectGroups.length)];

    for (let i = 0; i < linkGroup.length; i++) {
      const url = linkGroup[i];
      if (i === linkGroup.length - 1) {
        router.push(url);
      } else {
        window.open(url, '_blank', 'noopener,noreferrer');
      }
    }
  }, [router]);


  return (
    <main>
      <br />
      <hr />
      <h1 className="text-3xl font-bold p-10">Escaping...</h1>
      <hr />
    </main>
  );
}
