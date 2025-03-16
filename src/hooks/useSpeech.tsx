
import { useState, useEffect } from 'react';

export interface SpeechOptions {
  rate?: number;
  pitch?: number;
  volume?: number;
  lang?: string;
}

export const useSpeech = (defaultOptions?: SpeechOptions) => {
  const [speaking, setSpeaking] = useState(false);
  const [supported, setSupported] = useState(true);
  const [voices, setVoices] = useState<SpeechSynthesisVoice[]>([]);
  const [currentVoice, setCurrentVoice] = useState<SpeechSynthesisVoice | null>(null);

  // Default options
  const options = {
    rate: defaultOptions?.rate || 1,
    pitch: defaultOptions?.pitch || 1,
    volume: defaultOptions?.volume || 1,
    lang: defaultOptions?.lang || 'en-US',
  };

  useEffect(() => {
    // Check if speech synthesis is supported
    if (!('speechSynthesis' in window)) {
      setSupported(false);
      return;
    }

    // Get available voices
    const updateVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
      
      // Set default voice (preferably a female voice for better accessibility)
      if (availableVoices.length > 0) {
        const englishVoice = availableVoices.find(
          voice => voice.lang.includes('en') && voice.name.includes('Female')
        ) || availableVoices.find(
          voice => voice.lang.includes('en')
        ) || availableVoices[0];
        
        setCurrentVoice(englishVoice);
      }
    };

    // Chrome loads voices asynchronously
    if (window.speechSynthesis.onvoiceschanged !== undefined) {
      window.speechSynthesis.onvoiceschanged = updateVoices;
    }
    
    updateVoices();

    // Cleanup
    return () => {
      if (speaking) {
        window.speechSynthesis.cancel();
      }
    };
  }, []);

  // Function to speak text
  const speak = (text: string) => {
    if (!supported || !text) return;
    
    // Cancel any ongoing speech
    window.speechSynthesis.cancel();
    
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.rate = options.rate;
    utterance.pitch = options.pitch;
    utterance.volume = options.volume;
    
    if (currentVoice) {
      utterance.voice = currentVoice;
    } else {
      utterance.lang = options.lang;
    }
    
    utterance.onstart = () => setSpeaking(true);
    utterance.onend = () => setSpeaking(false);
    utterance.onerror = () => setSpeaking(false);
    
    window.speechSynthesis.speak(utterance);
  };

  // Function to stop speaking
  const stop = () => {
    if (!supported) return;
    window.speechSynthesis.cancel();
    setSpeaking(false);
  };

  // Change voice
  const changeVoice = (voice: SpeechSynthesisVoice) => {
    setCurrentVoice(voice);
  };

  return { 
    speak, 
    stop, 
    speaking, 
    supported, 
    voices, 
    currentVoice, 
    changeVoice 
  };
};
