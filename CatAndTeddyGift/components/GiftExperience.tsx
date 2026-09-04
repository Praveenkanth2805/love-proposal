'use client';

import { AnimatePresence, motion } from 'framer-motion';
import { useState } from 'react';

import WelcomeScene from './scenes/WelcomeScene';
import TeddyScene from './scenes/TeddyScene';
import CatScene from './scenes/CatScene';
import TogetherScene from './scenes/TogetherScene';
import SuspenseScene from './scenes/SuspenseScene';
import CountdownScene from './scenes/CountdownScene';
import RevealScene from './scenes/RevealScene';
import FinalScene from './scenes/FinalScene';

import FloatingHearts from './effects/FloatingHearts';
import MusicControl from './ui/MusicControl';

import { giftConfig } from '../lib/config';

type Scene =
  | 'welcome'
  | 'teddy'
  | 'cat'
  | 'together'
  | 'suspense'
  | 'countdown'
  | 'reveal'
  | 'final';

const sceneOrder: Scene[] = [
  'welcome',
  'teddy',
  'cat',
  'together',
  'suspense',
  'countdown',
  'reveal',
  'final',
];

export default function GiftExperience() {
  const [scene, setScene] = useState<Scene>('welcome');
  const [started, setStarted] = useState(false);

  const nextScene = () => {
    const currentIndex = sceneOrder.indexOf(scene);
    const next = sceneOrder[currentIndex + 1];
    if (next) setScene(next);
  };

  const startExperience = () => {
    setStarted(true);
    setScene('teddy');
  };

  const renderScene = () => {
    switch (scene) {
      case 'welcome':
        return <WelcomeScene onStart={startExperience} />;

      case 'teddy':
        return <TeddyScene onNext={nextScene} />;

      case 'cat':
        return <CatScene onNext={nextScene} />;

      case 'together':
        return <TogetherScene onNext={nextScene} />;

      case 'suspense':
        return <SuspenseScene onNext={nextScene} />;

      case 'countdown':
        return <CountdownScene onComplete={() => setScene('reveal')} />;

      case 'reveal':
        return <RevealScene onNext={() => setScene('final')} />;

      case 'final':
        return (
          <FinalScene
            name={giftConfig.lovedOneName}
            sender={giftConfig.senderName}
          />
        );

      default:
        return null;
    }
  };

  return (
    <main className="relative min-h-[100svh] overflow-hidden bg-[#fff8fb] text-[#3b2921]">
      <FloatingHearts count={started ? 12 : 8} />

      <MusicControl enabled={giftConfig.musicEnabled} />

      <AnimatePresence mode="wait">
        <motion.div
          key={scene}
          className="relative z-10 min-h-[100svh]"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{
            duration: 0.55,
            ease: 'easeInOut',
          }}
        >
          {renderScene()}
        </motion.div>
      </AnimatePresence>
    </main>
  );
}