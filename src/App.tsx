import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Code, Cpu, Layers, Search, Terminal, ArrowRight, CheckCircle2, AlertCircle, Info, X, Trophy, RefreshCcw } from 'lucide-react';

const TEXT_EXCERPT = `"My life is very monotonous," the fox said. "I hunt chickens; men hunt me. All the chickens are just alike, and all the men are just alike. And, in consequence, I am a little bored. But if you tame me, it will be as if the sun came to shine on my life. I shall know the sound of a step that will be different from all the others. Other steps send me hurrying back underneath the ground. Yours will call me, like music, out of my burrow. And then look: you see the grain-fields down yonder? I do not eat bread. Wheat is of no use to me. The wheat fields have nothing to say to me. And that is sad. But you have hair that is the color of gold. Think how wonderful that will be when you have tamed me! The grain, which is also golden, will bring me back the thought of you. And I shall love to listen to the wind in the wheat..."`;

export default function App() {
  const [isQuizOpen, setIsQuizOpen] = useState(false);

  return (
    <div className="min-h-screen pb-20">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-slate-200/50">
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 bg-gradient-to-br from-indigo-600 to-violet-600 rounded-xl flex items-center justify-center shadow-lg shadow-indigo-200">
              <Cpu className="text-white" size={20} />
            </div>
            <span className="font-bold text-xl tracking-tight text-slate-900">
              NLP <span className="text-indigo-600 font-serif italic">Lab</span>
            </span>
          </div>
          <div className="hidden md:flex gap-10">
            {['Overview', 'Pipeline', 'Code', 'Analysis'].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`} 
                className="text-sm font-bold text-slate-500 hover:text-indigo-600 transition-colors tracking-wide uppercase"
              >
                {item}
              </a>
            ))}
          </div>
          <button 
            onClick={() => setIsQuizOpen(true)}
            className="px-5 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-xl hover:bg-indigo-600 transition-all shadow-lg shadow-slate-200"
          >
            Start Quiz
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {isQuizOpen && (
          <QuizModal onClose={() => setIsQuizOpen(false)} />
        )}
      </AnimatePresence>

      {/* Hero Section */}
      <section id="overview" className="relative pt-24 pb-32 px-4 overflow-hidden">
        {/* Background Accents */}
        <div className="absolute top-0 left-0 w-full h-full -z-10 bg-[#FDFDFD]">
          <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-indigo-100/50 rounded-full blur-[120px] animate-pulse" />
          <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-rose-100/50 rounded-full blur-[120px]" />
          <div className="absolute top-[20%] right-[10%] w-[30%] h-[30%] bg-emerald-100/30 rounded-full blur-[100px]" />
        </div>

        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <span className="inline-block px-4 py-1.5 mb-8 text-xs font-bold tracking-[0.2em] text-indigo-600 uppercase bg-indigo-50/80 backdrop-blur-sm rounded-full border border-indigo-100 shadow-sm">
              Chapter 1: Preprocessing
            </span>
            <h1 className="text-5xl md:text-7xl font-bold text-slate-900 mb-8 tracking-tight leading-[1.1]">
              How Machines "Read" <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-violet-600 to-rose-600 font-serif italic pb-2">
                The Little Prince
              </span>
            </h1>
            
            <div className="max-w-2xl mx-auto text-left bg-white/60 backdrop-blur-md p-8 rounded-[2rem] border border-white shadow-xl shadow-indigo-500/5 mb-12">
              <p className="text-slate-700 mb-6 leading-relaxed text-lg">
                Welcome! This guide is designed to help you understand <strong>Natural Language Processing (NLP)</strong>—a branch of <strong>Artificial Intelligence (AI)</strong> that helps computers understand, interpret, and manipulate human language.
              </p>
              <p className="text-slate-600 leading-relaxed">
                Think of how your phone suggests the next word when you text, or how a digital assistant like Siri understands your voice. That's NLP in action! In this chapter, we'll look at "Preprocessing," which is the first step where we clean up raw text so a computer can start to make sense of it.
              </p>
            </div>
            
            <p className="text-xl text-slate-500 mb-12 leading-relaxed max-w-2xl mx-auto font-medium">
              Follow our step-by-step pipeline on a classic literary excerpt to see how machines "simplify" text—and what gets lost in translation.
            </p>
          </motion.div>

          {/* Pipeline Graphic */}
          <div className="flex flex-wrap justify-center gap-6 mt-16">
            {[
              { name: 'Text', icon: BookOpen, color: 'text-blue-600', bg: 'bg-blue-50' },
              { name: 'Tokenize', icon: Search, color: 'text-emerald-600', bg: 'bg-emerald-50' },
              { name: 'Clean', icon: Layers, color: 'text-rose-600', bg: 'bg-rose-50' },
              { name: 'Normalize', icon: Cpu, color: 'text-amber-600', bg: 'bg-amber-50' },
              { name: 'Tag', icon: Terminal, color: 'text-violet-600', bg: 'bg-violet-50' },
              { name: 'NER', icon: Code, color: 'text-indigo-600', bg: 'bg-indigo-50' },
            ].map((step, i, arr) => (
              <div key={step.name} className="flex items-center gap-4">
                <motion.div 
                  whileHover={{ scale: 1.1 }}
                  className="flex flex-col items-center gap-3"
                >
                  <div className={`w-14 h-14 rounded-2xl ${step.bg} border border-white shadow-lg flex items-center justify-center ${step.color}`}>
                    <step.icon size={24} />
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-[0.15em] text-slate-400">{step.name}</span>
                </motion.div>
                {i < arr.length - 1 && (
                  <div className="hidden sm:block w-6 h-[2px] bg-gradient-to-r from-slate-200 to-slate-100 mb-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Source Text Section */}
      <section className="max-w-4xl mx-auto px-4 mb-24">
        <div className="bg-white p-8 md:p-12 rounded-3xl border border-slate-200 shadow-sm relative overflow-hidden">
          <div className="absolute top-0 left-0 w-2 h-full bg-indigo-600" />
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-400 mb-6 flex items-center gap-2">
            <BookOpen size={16} /> The Source Text
          </h2>
          <blockquote className="text-xl md:text-2xl font-serif italic text-slate-800 leading-relaxed">
            {TEXT_EXCERPT}
          </blockquote>
          <p className="mt-6 text-sm font-medium text-slate-500">— Antoine de Saint-Exupéry, The Little Prince</p>
        </div>
      </section>

      {/* Pipeline Steps Section */}
      <section id="pipeline" className="max-w-7xl mx-auto px-4 mb-24">
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">The Preprocessing Pipeline</h2>
          <p className="text-slate-600">Preprocessing is like preparing ingredients before cooking. We take raw text and break it down into smaller, cleaner pieces that the computer can easily "digest." Each step below is a common tool used in Natural Language Processing (NLP).</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <StepCard 
            num="01"
            title="Sentence Tokenization"
            definition="Breaking a paragraph into individual sentences."
            intuition="Computers need to know where one thought ends and another begins to understand context."
            example={{ 
              in: '"My life is very monotonous," the fox said. "I hunt chickens; men hunt me."', 
              out: '["My life is very monotonous," the fox said.", "I hunt chickens; men hunt me."]' 
            }}
            colorClass="step-card-blue"
            accentColor="bg-blue-600"
            outputColor="bg-fuchsia-600"
          />
          <StepCard 
            num="02"
            title="Word Tokenization"
            definition="Splitting sentences into individual words (tokens)."
            intuition="Words are the basic units of meaning. This step also separates punctuation from words."
            example={{ 
              in: '"My life is very monotonous," the fox said.', 
              out: '["\"", "My", "life", "is", "very", "monotonous", ",", "\"", "the", "fox", "said", "."]' 
            }}
            colorClass="step-card-emerald"
            accentColor="bg-emerald-600"
          />
          <StepCard 
            num="03"
            title="Cleaning (Stopwords)"
            definition="Removing common words that carry little unique meaning."
            intuition="Words like 'the' or 'is' appear everywhere. We remove them to focus on the 'meat' of the text."
            example={{ 
              in: 'All the chickens are just alike, and all the men are just alike.', 
              out: '["chickens", "alike", "men", "alike"]' 
            }}
            badge="Custom: 'fox' added"
            colorClass="step-card-rose"
            accentColor="bg-rose-600"
          />
          <StepCard 
            num="04"
            title="Normalization"
            definition="Reducing words to their root or dictionary form."
            intuition="Stemming is a quick chop; Lemmatization uses a dictionary to find the true base form."
            example={{ 
              in: 'chickens, men, different, hurrying', 
              out: 'Stem: chicken, men, differ, hurri | Lemma: chicken, men, different, hurrying' 
            }}
            colorClass="step-card-amber"
            accentColor="bg-amber-600"
          />
          <StepCard 
            num="05"
            title="Part-of-Speech (POS) Tagging"
            definition="Assigning parts of speech (Noun, Verb, etc.) to each word."
            intuition="This helps the machine understand the grammatical role and relationship between words."
            example={{ 
              in: '"But if you tame me, it will be as if the sun came to shine on my life."', 
              out: '[("But", "CC"), ("if", "IN"), ("you", "PRP"), ("tame", "VBP"), ("me", "PRP"), (",", ","), ("it", "PRP"), ("will", "MD"), ("be", "VB"), ("as", "IN"), ("if", "IN"), ("the", "DT"), ("sun", "NN"), ("came", "VBD"), ("to", "TO"), ("shine", "VB"), ("on", "IN"), ("my", "PRP$"), ("life", "NN"), (".", ".")]' 
            }}
            colorClass="step-card-violet"
            accentColor="bg-violet-600"
          />
          <StepCard 
            num="06"
            title="Named Entity Recognition (NER)"
            definition="Identifying people, places, or organizations."
            intuition="The model looks for 'entities' that represent real-world objects or concepts."
            example={{ 
              in: 'Think how wonderful that will be...', 
              out: 'Think | Label: PERSON (Mislabeled because it is capitalized)' 
            }}
            colorClass="step-card-indigo"
            accentColor="bg-fuchsia-600"
            outputColor="bg-indigo-600"
          />
        </div>
      </section>

      {/* Code Walkthrough Section */}
      <section id="code" className="bg-slate-900 py-24 px-4 text-white">
        <div className="max-w-5xl mx-auto">
          <div className="mb-12">
            <h2 className="text-3xl font-bold mb-4">Python & NLTK Walkthrough</h2>
            <p className="text-slate-400">See how these steps are implemented using the Natural Language Toolkit (NLTK)—a popular library used in Artificial Intelligence (AI) to work with human language data.</p>
          </div>

          <div className="space-y-12">
            <div className="code-block-container group">
              <span className="code-label">Step 1-3: Tokenization & Cleaning</span>
              <pre className="p-6 bg-slate-800 rounded-2xl border border-slate-700 font-mono text-sm overflow-x-auto">
{`# 1. Sentence Tokenization
sentences = sent_tokenize(text)
print(f"Total number of sentences: {len(sentences)}")

# 2. Word Tokenization
tokens = word_tokenize(text)
print(f"Total number of tokens: {len(tokens)}")

# 3. Remove Stopwords and Punctuation
stop_words = set(stopwords.words('english'))
stop_words.add('fox') # custom domain-specific stopword
punctuation = set(string.punctuation)

cleaned_tokens = [ 
    w for w in tokens 
    if w.lower() not in stop_words and w not in punctuation 
]`}
              </pre>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                  <p>Adding "fox" as a stopword removes the main character from the analysis.</p>
                </div>
                <div className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                  <p>Lowercasing ensures "The" and "the" are treated as the same stopword.</p>
                </div>
              </div>
            </div>

            <div className="code-block-container group">
              <span className="code-label">Step 4-6: Advanced Analysis</span>
              <pre className="p-6 bg-slate-800 rounded-2xl border border-slate-700 font-mono text-sm overflow-x-auto">
{`# 4. Stemming and Lemmatization (Side-by-Side)
ps = PorterStemmer()
lemmatizer = WordNetLemmatizer()
for token in cleaned_tokens[:15]:
    print(f"{token:<15} | {ps.stem(token):<15} | {lemmatizer.lemmatize(token):<15}")

# 5. POS Tagging
pos_tags = pos_tag(cleaned_tokens)

# 6. Named Entity Recognition (NER)
ner_tree = ne_chunk(pos_tag(word_tokenize(text)))
for chunk in ner_tree:
    if hasattr(chunk, 'label'):
        print(f"{' '.join(w for w, t in chunk.leaves()):<20} | Label: {chunk.label()}")`}
              </pre>
              <div className="mt-4 grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                  <p>Lemmatization requires a part-of-speech context to be 100% accurate.</p>
                </div>
                <div className="flex gap-3 text-sm text-slate-300">
                  <CheckCircle2 className="text-emerald-500 shrink-0" size={18} />
                  <p>NER often relies on capitalization, which can lead to false positives in literature.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Analysis & Reflection Section */}
      <section id="analysis" className="max-w-5xl mx-auto px-4 py-24">
        <div className="mb-12 text-center">
          <h2 className="text-4xl font-bold text-slate-900 mb-4">Critical Analysis & Reflection</h2>
          <p className="text-slate-600 max-w-2xl mx-auto">What happens when we apply these "standard" tools to a poetic, literary text? Here is what we observed.</p>
        </div>

        <div className="grid grid-cols-1 gap-12">
          <AnalysisCard 
            title="Stemming vs Lemmatization: Precision Matters"
            icon={<Cpu className="text-indigo-600" />}
            bgColor="bg-indigo-50/50"
            borderColor="border-indigo-100"
            content={
              <div className="space-y-4">
                <p>
                  In our analysis, <strong>Lemmatization</strong> proved far superior for preserving the author's intent. While <strong>Stemming</strong> (using the Porter Stemmer) crudely chopped words like "monotonous" into "monoton" and "alike" into "alik," Lemmatization used a digital dictionary to correctly identify the base forms.
                </p>
                <p>
                  This distinction is critical for any automated system. Imagine a computer processing technical documentation: a stemmer might treat "operating," "operation," and "operator" as the same root, potentially blurring important functional distinctions. Lemmatization ensures that the meaning remains intact, which is vital for accurate search results, data categorization, and user safety.
                </p>
                <p className="text-sm border-l-4 border-indigo-200 pl-4 italic bg-white/50 py-3 rounded-r-xl">
                  <strong>Key Takeaway:</strong> Stemming is a "brute force" method that is fast but messy. Lemmatization is a "smart" method that understands the rules of language, making it the gold standard for any field where precision is key.
                </p>
              </div>
            }
          />
          <AnalysisCard 
            title="NER Accuracy: The 'Capitalization Trap'"
            icon={<AlertCircle className="text-amber-600" />}
            bgColor="bg-amber-50/50"
            borderColor="border-amber-100"
            content={
              <div className="space-y-4">
                <p>
                  The <strong>Named Entity Recognition (NER)</strong> model often fails to understand the difference between a <em>Proper Name</em> and a word that just happens to be capitalized. In our text, the model mislabeled the verb <strong>"Think"</strong> as a <strong>PERSON</strong> because it was capitalized.
                </p>
                <p>
                  It is important to distinguish between <strong>NER</strong> and <strong>Coreference Resolution</strong>. While a human knows that "Yours" refers to the Little Prince, "Other" refers to the steps of the hunters. NER is strictly looking for formal names (like "John" or "Paris"). When a model labels a pronoun or a verb as a person, it is a "False Positive" error—it's guessing based on the capital letter rather than understanding the grammar.
                </p>
                <p>
                  In a real-world application, like a news aggregator or search engine, this is a major accuracy concern. If an AI model is only looking for capitalized nouns, it might miss critical information written in lowercase, or it might mislabel common words as specific brands or people. This shows why we must always verify machine outputs with human expertise.
                </p>
              </div>
            }
          />
          <AnalysisCard 
            title="Stopword Removal: The Danger of 'Erasing' Context"
            icon={<Layers className="text-rose-600" />}
            bgColor="bg-rose-50/50"
            borderColor="border-rose-100"
            content={
              <div className="space-y-4">
                <p>
                  By removing "Stopwords," we lost the very words that make this story meaningful. Pronouns like "me" and "you" were discarded, yet they are the foundation of the relationship between the fox and the prince. Without them, the machine sees a list of objects (wheat, chickens, music) but misses the human (or vulpine) connection.
                </p>
                <p>
                  The decision to add "fox" as a custom stopword was particularly damaging. It effectively erased the protagonist from the data. This teaches us a vital lesson: stopword lists are not "one size fits all." In a customer support context, if a stopword list included words like "problem" or "help," the resulting analysis would be completely useless.
                </p>
                <p className="text-sm border-l-4 border-rose-200 pl-4 italic bg-white/50 py-3 rounded-r-xl">
                  <strong>Reflection:</strong> Before you "clean" your data, ask yourself: "What am I throwing away?" In literature and business, the most common words are often the ones that carry the most emotional or functional weight.
                </p>
              </div>
            }
          />
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-slate-200 pt-12 text-center text-slate-400 text-sm">
        <p>© 2026 Natural Language Processing (NLP) Study Guide Series • Exploring The Little Prince</p>
      </footer>
    </div>
  );
}

function StepCard({ num, title, definition, intuition, example, badge, colorClass, accentColor, outputColor = "bg-indigo-600" }: any) {
  return (
    <motion.div 
      whileHover={{ y: -8, scale: 1.02 }}
      className={`p-8 rounded-[2.5rem] border shadow-xl shadow-slate-200/50 flex flex-col h-full transition-all duration-500 ${colorClass}`}
    >
      <div className="flex justify-between items-start mb-8">
        <span className="text-5xl font-black text-slate-200/50 italic">{num}</span>
        {badge && <span className="px-3 py-1 bg-rose-500 text-white text-[10px] font-bold uppercase rounded-full shadow-lg shadow-rose-200">{badge}</span>}
      </div>
      <h3 className="text-2xl font-bold text-slate-900 mb-4 tracking-tight">{title}</h3>
      <p className={`text-sm font-bold mb-6 px-3 py-1 rounded-lg inline-block w-fit text-white ${accentColor}`}>{definition}</p>
      <div className="bg-white/60 backdrop-blur-sm p-6 rounded-2xl mb-8 flex-grow border border-white/50">
        <p className="text-sm text-slate-600 leading-relaxed italic flex gap-2">
          <Info size={18} className="shrink-0 text-slate-400" /> {intuition}
        </p>
      </div>
      <div className="space-y-4">
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Input</span>
          <div className="p-4 bg-white/80 rounded-2xl text-xs font-mono leading-relaxed break-words border border-slate-100 shadow-inner">{example.in}</div>
        </div>
        <div className="flex justify-center py-1">
          <ArrowRight size={20} className="text-slate-300 rotate-90 md:rotate-0" />
        </div>
        <div className="flex flex-col gap-2">
          <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 ml-1">Output</span>
          <div className={`p-4 ${outputColor} text-white rounded-2xl text-xs font-mono leading-relaxed break-words shadow-lg shadow-indigo-200`}>{example.out}</div>
        </div>
      </div>
    </motion.div>
  );
}

function AnalysisCard({ title, icon, content, bgColor, borderColor }: any) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: -20 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      className={`p-10 rounded-[3rem] border shadow-2xl shadow-slate-200/40 flex flex-col md:flex-row gap-10 items-start transition-all duration-500 hover:shadow-indigo-500/10 ${bgColor} ${borderColor}`}
    >
      <div className="w-16 h-16 rounded-3xl bg-white shadow-xl flex items-center justify-center shrink-0 border border-slate-50">
        {icon}
      </div>
      <div className="flex-1">
        <h3 className="text-3xl font-bold text-slate-900 mb-6 tracking-tight">{title}</h3>
        <div className="text-slate-600 leading-relaxed text-lg">
          {content}
        </div>
      </div>
    </motion.div>
  );
}

const QUIZ_QUESTIONS = [
  {
    question: "What is the primary goal of 'Stopword Removal' in NLP?",
    options: [
      "To remove all punctuation from the text.",
      "To remove common words that carry little unique meaning to focus on key terms.",
      "To fix spelling errors in the document.",
      "To translate the text into another language."
    ],
    correct: 1,
    explanation: "Stopwords like 'the', 'is', and 'and' are removed to help the machine focus on the more meaningful words in the text."
  },
  {
    question: "Which process reduces words to their dictionary base form (e.g., 'hurrying' to 'hurry') using a dictionary?",
    options: [
      "Stemming",
      "Tokenization",
      "Lemmatization",
      "NER"
    ],
    correct: 2,
    explanation: "Lemmatization uses a dictionary (like WordNet) to find the true base form, whereas Stemming just chops off the ends of words."
  },
  {
    question: "In our 'The Little Prince' example, why was the word 'Think' mislabeled by the NER model?",
    options: [
      "Because it is a very long word.",
      "Because it was at the start of a sentence and capitalized.",
      "Because it is a synonym for a person's name.",
      "Because the model was trained on a specific dataset only."
    ],
    correct: 1,
    explanation: "NER models often rely on capitalization to identify entities, leading to 'False Positives' when a common word is capitalized."
  },
  {
    question: "What is 'Part-of-Speech (POS) Tagging' used for?",
    options: [
      "To count the total number of words in a sentence.",
      "To assign grammatical roles like Noun, Verb, or Adjective to each word.",
      "To remove emojis from social media posts.",
      "To identify the geographical location of the author."
    ],
    correct: 1,
    explanation: "POS tagging helps the machine understand the grammatical structure and relationships between words."
  }
];

function QuizModal({ onClose }: { onClose: () => void }) {
  const [currentStep, setCurrentStep] = useState(0);
  const [score, setScore] = useState(0);
  const [showResult, setShowResult] = useState(false);
  const [selectedOption, setSelectedOption] = useState<number | null>(null);
  const [isAnswered, setIsAnswered] = useState(false);

  const handleOptionClick = (index: number) => {
    if (isAnswered) return;
    setSelectedOption(index);
    setIsAnswered(true);
    if (index === QUIZ_QUESTIONS[currentStep].correct) {
      setScore(score + 1);
    }
  };

  const handleNext = () => {
    if (currentStep < QUIZ_QUESTIONS.length - 1) {
      setCurrentStep(currentStep + 1);
      setSelectedOption(null);
      setIsAnswered(false);
    } else {
      setShowResult(true);
    }
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScore(0);
    setShowResult(false);
    setSelectedOption(null);
    setIsAnswered(false);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-slate-900/60 backdrop-blur-md"
    >
      <motion.div 
        initial={{ scale: 0.9, opacity: 0, y: 20 }}
        animate={{ scale: 1, opacity: 1, y: 0 }}
        className="bg-white w-full max-w-2xl rounded-[3rem] shadow-2xl overflow-hidden relative"
      >
        <button 
          onClick={onClose}
          className="absolute top-8 right-8 p-2 hover:bg-slate-100 rounded-full transition-colors text-slate-400"
        >
          <X size={24} />
        </button>

        {!showResult ? (
          <div className="p-10 md:p-16">
            <div className="flex items-center gap-3 mb-8">
              <span className="px-3 py-1 bg-indigo-100 text-indigo-600 text-[10px] font-bold uppercase rounded-full tracking-widest">
                Question {currentStep + 1} of {QUIZ_QUESTIONS.length}
              </span>
              <div className="flex-1 h-1 bg-slate-100 rounded-full overflow-hidden">
                <motion.div 
                  initial={{ width: 0 }}
                  animate={{ width: `${((currentStep + 1) / QUIZ_QUESTIONS.length) * 100}%` }}
                  className="h-full bg-indigo-600"
                />
              </div>
            </div>

            <h3 className="text-2xl md:text-3xl font-bold text-slate-900 mb-10 leading-tight">
              {QUIZ_QUESTIONS[currentStep].question}
            </h3>

            <div className="space-y-4 mb-10">
              {QUIZ_QUESTIONS[currentStep].options.map((option, idx) => {
                const isCorrect = idx === QUIZ_QUESTIONS[currentStep].correct;
                const isSelected = idx === selectedOption;
                
                let bgColor = "bg-slate-50 border-slate-100 hover:border-indigo-200 hover:bg-indigo-50/30";
                if (isAnswered) {
                  if (isCorrect) bgColor = "bg-emerald-50 border-emerald-200 text-emerald-700";
                  else if (isSelected) bgColor = "bg-rose-50 border-rose-200 text-rose-700";
                  else bgColor = "bg-slate-50 border-slate-100 opacity-50";
                }

                return (
                  <button
                    key={idx}
                    disabled={isAnswered}
                    onClick={() => handleOptionClick(idx)}
                    className={`w-full text-left p-6 rounded-2xl border-2 transition-all flex items-center justify-between group ${bgColor}`}
                  >
                    <span className="font-medium">{option}</span>
                    {isAnswered && isCorrect && <CheckCircle2 size={20} className="text-emerald-500" />}
                    {isAnswered && isSelected && !isCorrect && <AlertCircle size={20} className="text-rose-500" />}
                  </button>
                );
              })}
            </div>

            <AnimatePresence>
              {isAnswered && (
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="p-6 bg-indigo-50 rounded-2xl border border-indigo-100 mb-10"
                >
                  <p className="text-sm text-indigo-900 leading-relaxed">
                    <span className="font-bold">Explanation:</span> {QUIZ_QUESTIONS[currentStep].explanation}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>

            {isAnswered && (
              <button
                onClick={handleNext}
                className="w-full py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all flex items-center justify-center gap-2 shadow-xl shadow-slate-200"
              >
                {currentStep < QUIZ_QUESTIONS.length - 1 ? "Next Question" : "See Results"}
                <ArrowRight size={20} />
              </button>
            )}
          </div>
        ) : (
          <div className="p-10 md:p-16 text-center">
            <div className="w-24 h-24 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-8 text-amber-600">
              <Trophy size={48} />
            </div>
            <h3 className="text-4xl font-bold text-slate-900 mb-4">Quiz Complete!</h3>
            <p className="text-slate-500 mb-10 text-lg">
              You scored <span className="text-indigo-600 font-bold">{score}</span> out of <span className="font-bold">{QUIZ_QUESTIONS.length}</span>
            </p>
            
            <div className="grid grid-cols-2 gap-4">
              <button
                onClick={resetQuiz}
                className="py-5 bg-slate-100 text-slate-900 font-bold rounded-2xl hover:bg-slate-200 transition-all flex items-center justify-center gap-2"
              >
                <RefreshCcw size={20} /> Try Again
              </button>
              <button
                onClick={onClose}
                className="py-5 bg-slate-900 text-white font-bold rounded-2xl hover:bg-indigo-600 transition-all"
              >
                Finish
              </button>
            </div>
          </div>
        )}
      </motion.div>
    </motion.div>
  );
}
