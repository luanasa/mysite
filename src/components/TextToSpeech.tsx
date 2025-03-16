
import React, { useState } from 'react';
import { useSpeech } from '@/hooks/useSpeech';
import { Button } from '@/components/ui/button';
import { Headphones, Square, Settings } from 'lucide-react';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Slider } from '@/components/ui/slider';
import { cn } from '@/lib/utils';

interface TextToSpeechProps {
  className?: string;
}

export const TextToSpeech = ({ className }: TextToSpeechProps) => {
  const { speak, stop, speaking, supported, voices, currentVoice, changeVoice } = useSpeech();
  const [rate, setRate] = useState(1);
  const [showSettings, setShowSettings] = useState(false);

  if (!supported) {
    return null; // Don't render if speech synthesis is not supported
  }

  const handleSpeakPage = () => {
    if (speaking) {
      stop();
      return;
    }

    // Get text from main content and headings
    const mainContent = document.querySelectorAll('p, h1, h2, h3, h4, h5, h6');
    let textToSpeak = '';
    
    mainContent.forEach((element) => {
      if (element.textContent) {
        const tagName = element.tagName.toLowerCase();
        
        // Add a pause between different sections
        if (tagName.startsWith('h')) {
          textToSpeak += `${element.textContent}. `;
        } else {
          textToSpeak += `${element.textContent} `;
        }
      }
    });
    
    speak(textToSpeak);
  };

  return (
    <div className={cn("fixed bottom-4 right-4 z-50 flex items-center gap-2", className)}>
      {showSettings && (
        <div className="bg-white dark:bg-card rounded-lg shadow-lg p-3 border border-pastel-lavender/30 dark:border-primary/20">
          <div className="space-y-4 w-64">
            <div>
              <label className="text-sm font-medium mb-1 block">Speed: {rate}x</label>
              <Slider 
                value={[rate]} 
                min={0.5} 
                max={2} 
                step={0.1}
                onValueChange={(value) => setRate(value[0])} 
              />
            </div>
            
            <div>
              <label className="text-sm font-medium mb-1 block">Voice:</label>
              <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline" size="sm" className="w-full justify-between">
                    {currentVoice?.name || 'Default voice'}
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent>
                  <DropdownMenuLabel>Select Voice</DropdownMenuLabel>
                  <DropdownMenuSeparator />
                  {voices.map((voice) => (
                    <DropdownMenuItem 
                      key={voice.name} 
                      onClick={() => changeVoice(voice)}
                      className={voice.name === currentVoice?.name ? "bg-accent" : ""}
                    >
                      {voice.name} ({voice.lang})
                    </DropdownMenuItem>
                  ))}
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
        </div>
      )}
      
      <Button
        variant="outline"
        size="icon"
        onClick={() => setShowSettings(!showSettings)}
        className="rounded-full bg-white dark:bg-card shadow-md hover:bg-accent"
      >
        <Settings className="h-5 w-5" />
        <span className="sr-only">Speech Settings</span>
      </Button>
      
      <Button
        variant={speaking ? "destructive" : "default"}
        size="icon"
        onClick={handleSpeakPage}
        className="rounded-full bg-pastel-lavender dark:bg-primary text-primary-foreground shadow-md"
      >
        {speaking ? (
          <Square className="h-5 w-5" />
        ) : (
          <Headphones className="h-5 w-5" />
        )}
        <span className="sr-only">
          {speaking ? 'Stop Reading' : 'Read Page'}
        </span>
      </Button>
    </div>
  );
};

export default TextToSpeech;
