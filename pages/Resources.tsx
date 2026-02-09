
import React, { useState, useMemo } from 'react';
import { Search, Calendar, User, ArrowRight, X, ChevronRight, BookOpen, HeartPulse, Bell } from 'lucide-react';

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  content: string;
  author: string;
  date: string;
  category: 'Education' | 'Health' | 'Foundation News';
  image: string;
  readTime: string;
}

const SAMPLE_POSTS: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Genotypes: AA, AS, and SS Explained',
    excerpt: 'Genotype education is the first step in breaking the cycle of sickle cell disease. Learn what these markers mean for your health and future.',
    content: `
      <p>Sickle cell disease (SCD) is a genetic condition that affects the red blood cells. To understand SCD, one must first understand genotypes. Genotype refers to the genetic makeup of an individual, specifically regarding the hemoglobin gene.</p>
      <h3>Common Genotype Combinations</h3>
      <p><strong>AA:</strong> This is the normal genotype. Two normal hemoglobin genes are inherited from parents. Individuals with AA genotype do not have sickle cell disease and cannot pass it on to their children.</p>
      <p><strong>AS:</strong> This is known as the Sickle Cell Trait. One normal gene (A) and one sickle gene (S) are inherited. Most people with AS lead healthy lives, but they carry the gene and can pass it to their offspring.</p>
      <p><strong>SS:</strong> This is Sickle Cell Anemia. Two sickle genes (S) are inherited. This leads to the production of abnormal hemoglobin, which causes red blood cells to become "sickle-shaped," leading to crises and other complications.</p>
      <h3>Why Testing Matters</h3>
      <p>Knowing your genotype before choosing a partner is critical in preventing the birth of children with SS genotype. At ChenRapha Foundation, we offer free testing and counseling to help young people make informed decisions.</p>
    `,
    author: 'Dr. Amara Okoro',
    date: 'May 12, 2024',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&q=80&w=800',
    readTime: '6 min read'
  },
  {
    id: '2',
    title: 'Crisis Prevention: Tips for Managing Sickle Cell Daily',
    excerpt: 'Managing sickle cell disease requires consistency. Discover daily habits that can significantly reduce the frequency of painful crises.',
    content: `
      <p>Living with sickle cell disease presents daily challenges, but many crises can be prevented or managed with the right knowledge and habits. Here are essential tips for individuals and caregivers.</p>
      <h3>1. Stay Hydrated</h3>
      <p>Dehydration is a major trigger for sickle cell crises. Water helps keep the blood thinner and moving through the vessels. Aim for at least 8-10 glasses of water daily.</p>
      <h3>2. Avoid Extreme Temperatures</h3>
      <p>Both extreme cold and extreme heat can trigger a crisis. Dress warmly in cold weather and stay cool in the heat. Avoid sudden changes in temperature, such as jumping into a cold pool after being in the sun.</p>
      <h3>3. Prioritize Rest</h3>
      <p>Overexertion and stress can lead to complications. Ensure adequate sleep and take breaks during physical activities.</p>
      <h3>4. Regular Medical Checkups</h3>
      <p>Consistency with clinics and prescribed medications like folic acid and hydroxyurea is vital. ChenRapha Foundation provides transportation assistance for those struggling to reach their medical appointments.</p>
    `,
    author: 'Nurse Tunde Williams',
    date: 'June 05, 2024',
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&q=80&w=800',
    readTime: '8 min read'
  },
  {
    id: '3',
    title: 'ChenRapha Expands Outreach to Rural Lagos Communities',
    excerpt: 'Our volunteer medical team recently visited three rural communities in Lagos, providing free medications and screenings to over 500 families.',
    content: `
      <p>We are thrilled to share the success of our latest outreach program. Last month, our dedicated team of volunteer doctors and nurses traveled to rural parts of Lagos State to bring "Grace and Healing" to those in need.</p>
      <p>The mission was clear: provide essential sickle cell medication, conduct free genotype screenings, and educate families on crisis management.</p>
      <h3>Key Impact Stats from the Trip:</h3>
      <ul>
        <li>542 individuals screened for genotype.</li>
        <li>120 patients received a 3-month supply of essential medications.</li>
        <li>15 emergency cases were identified and referred to partner clinics.</li>
      </ul>
      <p>This work is only possible through the generous donations from our supporters in the United States and the tireless effort of our Nigerian volunteers. Together, we are touching millions of lives with grace.</p>
    `,
    author: 'Foundation Team',
    date: 'July 18, 2024',
    category: 'Foundation News',
    image: 'https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&q=80&w=800',
    readTime: '4 min read'
  },
  {
    id: '4',
    title: 'Nutrition and Sickle Cell: Foods that Support Health',
    excerpt: 'What you eat plays a role in how your body handles SCD. Explore the best foods for boosting immunity and energy.',
    content: `
      <p>A balanced diet is a cornerstone of health for everyone, but for those living with sickle cell disease, certain nutrients are especially important to support red blood cell production and immune function.</p>
      <h3>Focus on Folic Acid</h3>
      <p>Since red blood cells in SCD have a shorter lifespan, the body needs more folic acid to make new ones. Leafy greens, beans, and citrus fruits are excellent natural sources.</p>
      <h3>Iron Management</h3>
      <p>While iron is important, many SCD patients can actually suffer from iron overload due to frequent blood transfusions. Always consult your doctor before taking iron supplements.</p>
      <h3>Hydrating Foods</h3>
      <p>In addition to drinking water, eating water-rich foods like watermelon, cucumbers, and oranges can help maintain hydration levels.</p>
    `,
    author: 'Dr. Amara Okoro',
    date: 'August 10, 2024',
    category: 'Health',
    image: 'https://images.unsplash.com/photo-1490645935967-10de6ba17061?auto=format&fit=crop&q=80&w=800',
    readTime: '5 min read'
  }
];

const Resources: React.FC = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  const categories = ['All', 'Education', 'Health', 'Foundation News'];

  const filteredPosts = useMemo(() => {
    return SAMPLE_POSTS.filter(post => {
      const matchesSearch = post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                            post.excerpt.toLowerCase().includes(searchQuery.toLowerCase());
      const matchesCategory = activeCategory === 'All' || post.category === activeCategory;
      return matchesSearch && matchesCategory;
    });
  }, [searchQuery, activeCategory]);

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Header */}
      <section className="bg-gray-900 py-24 relative overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80" className="w-full h-full object-cover" alt="Background" />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">Knowledge is <span className="text-gold">Grace</span></h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto font-light">
            Stay informed with the latest health guides, education modules, and foundation updates from the heart of Nigeria.
          </p>
        </div>
      </section>

      {/* Filter & Search Bar */}
      <div className="sticky top-20 bg-white z-40 border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row md:items-center justify-between space-y-4 md:space-y-0">
            {/* Categories */}
            <div className="flex space-x-2 overflow-x-auto pb-2 md:pb-0 scrollbar-hide">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-2 rounded-full text-sm font-bold whitespace-nowrap transition-all ${
                    activeCategory === cat 
                      ? 'bg-vivid-red text-white shadow-md' 
                      : 'bg-gray-100 text-gray-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Search Input */}
            <div className="relative w-full md:w-80">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
              <input
                type="text"
                placeholder="Search resources..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2 bg-gray-50 border-none rounded-full focus:ring-2 focus:ring-nature-green transition-all text-sm"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Blog Grid */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredPosts.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
              {filteredPosts.map((post) => (
                <article 
                  key={post.id}
                  className="group bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 flex flex-col cursor-pointer"
                  onClick={() => setSelectedPost(post)}
                >
                  <div className="relative h-56 overflow-hidden">
                    <img 
                      src={post.image} 
                      alt={post.title} 
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    />
                    <div className="absolute top-4 left-4">
                      <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white shadow-lg ${
                        post.category === 'Education' ? 'bg-gold' : 
                        post.category === 'Health' ? 'bg-nature-green' : 'bg-vivid-red'
                      }`}>
                        {post.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-8 flex-grow flex flex-col">
                    <div className="flex items-center space-x-4 text-xs text-gray-400 mb-4">
                      <span className="flex items-center"><Calendar size={14} className="mr-1" /> {post.date}</span>
                      <span className="flex items-center"><BookOpen size={14} className="mr-1" /> {post.readTime}</span>
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-vivid-red transition-colors line-clamp-2">
                      {post.title}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed mb-6 line-clamp-3">
                      {post.excerpt}
                    </p>
                    <div className="mt-auto pt-6 border-t border-gray-50 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-vivid-red font-bold text-xs">
                          {post.author.charAt(0)}
                        </div>
                        <span className="text-xs font-medium text-gray-700">{post.author}</span>
                      </div>
                      <span className="text-vivid-red font-bold text-sm flex items-center">
                        Read More <ArrowRight size={16} className="ml-1 group-hover:translate-x-1 transition-transform" />
                      </span>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          ) : (
            <div className="text-center py-20 bg-gray-50 rounded-3xl border-2 border-dashed border-gray-200">
              <Search size={48} className="mx-auto text-gray-300 mb-4" />
              <h3 className="text-xl font-bold text-gray-600">No resources found</h3>
              <p className="text-gray-400">Try adjusting your filters or search term.</p>
              <button 
                onClick={() => {setSearchQuery(''); setActiveCategory('All');}}
                className="mt-6 text-vivid-red font-bold hover:underline"
              >
                Clear all filters
              </button>
            </div>
          )}
        </div>
      </section>

      {/* Subscription Section */}
      <section className="py-20 bg-nature-green text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white/10 backdrop-blur-md rounded-[3rem] p-8 md:p-16 border border-white/20">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <div className="w-12 h-12 bg-white/20 rounded-2xl flex items-center justify-center mb-6">
                  <Bell className="text-white" size={24} />
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 italic">Never miss a beat of healing.</h2>
                <p className="text-lg text-green-50 font-light">
                  Join our newsletter to receive the latest sickle cell health tips and impact stories from our field work in Nigeria.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
                <input 
                  type="email" 
                  placeholder="Your Email Address" 
                  className="flex-grow bg-white/20 border-white/30 text-white placeholder:text-green-100 rounded-2xl px-6 py-4 focus:ring-2 focus:ring-white transition-all border outline-none"
                />
                <button className="bg-white text-nature-green px-8 py-4 rounded-2xl font-bold hover:bg-green-50 transition-all shadow-xl">
                  Subscribe Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Post Modal/Detail View */}
      {selectedPost && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-10">
          <div 
            className="absolute inset-0 bg-gray-900/80 backdrop-blur-sm transition-opacity animate-in fade-in" 
            onClick={() => setSelectedPost(null)}
          ></div>
          <div className="relative bg-white w-full max-w-4xl max-h-full rounded-[2.5rem] overflow-hidden shadow-2xl flex flex-col animate-in zoom-in duration-300">
            {/* Modal Header */}
            <div className="sticky top-0 bg-white z-10 px-8 py-4 border-b border-gray-100 flex items-center justify-between">
              <div className="flex items-center space-x-2 text-vivid-red font-bold text-xs uppercase tracking-widest">
                <BookOpen size={16} />
                <span>Article Reader</span>
              </div>
              <button 
                onClick={() => setSelectedPost(null)}
                className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-900"
              >
                <X size={24} />
              </button>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="overflow-y-auto">
              <div className="relative h-64 md:h-96">
                <img src={selectedPost.image} alt={selectedPost.title} className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
                <div className="absolute bottom-8 left-8 right-8 text-white">
                  <span className={`px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider mb-4 inline-block ${
                    selectedPost.category === 'Education' ? 'bg-gold' : 
                    selectedPost.category === 'Health' ? 'bg-nature-green' : 'bg-vivid-red'
                  }`}>
                    {selectedPost.category}
                  </span>
                  <h2 className="text-3xl md:text-4xl font-bold leading-tight">{selectedPost.title}</h2>
                </div>
              </div>

              <div className="px-8 md:px-16 py-12 prose prose-lg max-w-none">
                <div className="flex items-center justify-between mb-10 pb-6 border-b border-gray-100">
                  <div className="flex items-center space-x-3">
                    <div className="w-10 h-10 rounded-full bg-red-50 text-vivid-red flex items-center justify-center font-bold">
                      {selectedPost.author.charAt(0)}
                    </div>
                    <div>
                      <p className="text-sm font-bold text-gray-900">{selectedPost.author}</p>
                      <p className="text-xs text-gray-400">Contributor • {selectedPost.date}</p>
                    </div>
                  </div>
                  <div className="hidden md:flex items-center text-xs text-gray-400 bg-gray-50 px-3 py-1.5 rounded-full">
                    <HeartPulse size={14} className="mr-1 text-vivid-red" />
                    Recommended Reading
                  </div>
                </div>

                <div 
                  className="text-gray-700 leading-relaxed space-y-6"
                  dangerouslySetInnerHTML={{ __html: selectedPost.content }}
                />

                <div className="mt-16 p-8 bg-gray-50 rounded-3xl border border-gray-100 flex flex-col md:flex-row items-center justify-between">
                  <div className="mb-6 md:mb-0 text-center md:text-left">
                    <h4 className="font-bold text-gray-900 mb-1">Help spread this knowledge</h4>
                    <p className="text-sm text-gray-500">Education is a powerful tool in crisis prevention.</p>
                  </div>
                  <div className="flex space-x-3">
                    <button className="bg-white border border-gray-200 text-gray-700 px-6 py-2.5 rounded-full text-sm font-bold hover:bg-gray-100 transition-all">
                      Share Post
                    </button>
                    <button 
                      onClick={() => setSelectedPost(null)}
                      className="bg-vivid-red text-white px-6 py-2.5 rounded-full text-sm font-bold hover:bg-opacity-90 transition-all shadow-md"
                    >
                      Done Reading
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Resources;
