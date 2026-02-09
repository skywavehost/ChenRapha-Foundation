import React, { useState, useRef, useEffect } from 'react';
import { MessageCircle, X, Send, HeartPulse, ShieldCheck, Loader2 } from 'lucide-react';
import { GoogleGenAI } from '@google/genai';
import { Message } from '../types.ts';

const HealthAssistant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { role: 'model', text: 'Hello! I am your ChenRapha Health Assistant. How can I help you understand sickle cell disease or genotypes today?' }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;

    const userMsg: Message = { role: 'user', text: input };
    setMessages(prev => [...prev, userMsg]);
    setInput('');
    setIsLoading(true);

    try {
      const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
      const modelName = 'gemini-3-flash-preview';
      
      const response = await ai.models.generateContent({
        model: modelName,
        contents: [...messages, userMsg].map(m => ({
          role: m.role,
          parts: [{ text: m.text }]
        })),
        config: {
          systemInstruction: `You are a compassionate health educator for ChenRapha Foundation, an NGO focusing on Sickle Cell Disease in Nigeria. 
          
          CRITICAL FORMATTING RULES:
          - DO NOT use any markdown symbols. 
          - DO NOT use hash signs (#) for headings.
          - DO NOT use asterisks (*) for bold or italics.
          - Use plain text only.
          - For headings, use CAPITAL LETTERS on their own line.
          - For lists, use simple dashes (-) or numbers followed by a period.
          - Use double line breaks between paragraphs to ensure the text is very easy to read.

          CONTENT GOALS:
          1. Educate about Sickle Cell genotypes (AA, AS, SS, AC, SC).
          2. Provide crisis prevention tips (hydration, warmth, rest).
          3. Emphasize that your advice is for educational purposes and they should see a doctor for medical diagnosis.
          4. Always use a kind, hopeful, and supportive tone.
          5. If asked about medication or financial help, direct them to contact ChenRapha Foundation directly via the contact form.`,
          temperature: 0.7,
        }
      });

      const aiText = response.text || "I'm sorry, I'm having trouble connecting right now. Please try again or contact our team directly.";
      setMessages(prev => [...prev, { role: 'model', text: aiText }]);
    } catch (error) {
      console.error('AI Assistant Error:', error);
      setMessages(prev => [...prev, { role: 'model', text: "I'm sorry, I'm currently unavailable. Please reach out to us at contact@chenraphafoundation.org for assistance." }]);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Trigger Button */}
      <button
        onClick={() => setIsOpen(true)}
        className={`fixed bottom-6 right-6 z-50 p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-95 ${
          isOpen ? 'opacity-0 scale-0 pointer-events-none' : 'bg-nature-green text-white'
        }`}
        aria-label="Open Health Assistant"
      >
        <div className="flex items-center space-x-2">
          <MessageCircle size={24} />
          <span className="hidden md:inline font-bold text-sm">Health Assistant</span>
        </div>
      </button>

      {/* Chat Window */}
      <div className={`fixed bottom-6 right-6 z-50 w-[90vw] md:w-[400px] h-[600px] max-h-[80vh] bg-white rounded-2xl shadow-2xl flex flex-col transition-all duration-300 origin-bottom-right ${
        isOpen ? 'scale-100 opacity-100' : 'scale-0 opacity-0 pointer-events-none'
      }`}>
        {/* Header */}
        <div className="bg-nature-green p-4 rounded-t-2xl flex justify-between items-center text-white">
          <div className="flex items-center space-x-3">
            <div className="p-2 bg-white bg-opacity-20 rounded-lg">
              <HeartPulse size={20} />
            </div>
            <div>
              <h3 className="font-bold text-sm">Health Assistant</h3>
              <p className="text-[10px] opacity-80 flex items-center">
                <ShieldCheck size={10} className="mr-1" />
                Informed Health Choices
              </p>
            </div>
          </div>
          <button onClick={() => setIsOpen(false)} className="hover:bg-white hover:bg-opacity-20 p-1 rounded-full transition-colors">
            <X size={20} />
          </button>
        </div>

        {/* Messages */}
        <div 
          ref={scrollRef}
          className="flex-grow overflow-y-auto p-4 space-y-4 bg-gray-50"
        >
          {messages.map((msg, idx) => (
            <div key={idx} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-[85%] p-4 rounded-2xl text-sm leading-relaxed shadow-sm whitespace-pre-wrap ${
                msg.role === 'user' 
                  ? 'bg-vivid-red text-white rounded-br-none' 
                  : 'bg-white text-gray-800 rounded-bl-none border border-gray-100'
              }`}>
                {msg.text}
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white border border-gray-100 p-4 rounded-2xl rounded-bl-none shadow-sm text-gray-400 flex items-center space-x-2">
                <Loader2 size={16} className="animate-spin text-nature-green" />
                <span className="text-xs">Preparing educational guidance...</span>
              </div>
            </div>
          )}
        </div>

        {/* Footer */}
        <div className="p-4 border-t border-gray-100 bg-white rounded-b-2xl">
          <div className="flex items-center space-x-2 bg-gray-100 p-2 rounded-xl focus-within:ring-2 focus-within:ring-nature-green ring-offset-2 transition-all">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Ask about genotypes..."
              className="flex-grow bg-transparent border-none focus:outline-none text-sm px-2 text-gray-700 h-10"
            />
            <button 
              onClick={handleSend}
              disabled={isLoading || !input.trim()}
              className="p-2.5 bg-nature-green text-white rounded-lg disabled:opacity-50 transition-all hover:bg-opacity-90 active:scale-95"
            >
              <Send size={18} />
            </button>
          </div>
          <p className="text-[10px] text-gray-400 mt-2 text-center uppercase tracking-widest font-medium">
            Educational purposes only. Please see a medical doctor.
          </p>
        </div>
      </div>
    </>
  );
};

export default HealthAssistant;