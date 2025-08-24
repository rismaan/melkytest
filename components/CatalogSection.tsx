import React from 'react';
import { NEWS_ARTICLES } from '../constants';
import { NewsArticle } from '../types';

const NewsCard: React.FC<{ article: NewsArticle }> = ({ article }) => (
    <div className="bg-slate-800 rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 transition-transform duration-300 flex flex-col">
        <img src={article.image} alt={article.title} className="w-full h-56 object-cover" />
        <div className="p-6 flex flex-col flex-grow">
            <div className="mb-4">
                <span className="inline-block bg-blue-600 text-white text-xs font-semibold px-3 py-1 rounded-full">{article.category}</span>
            </div>
            <h3 className="text-xl font-bold text-white mb-2 flex-grow">{article.title}</h3>
            <p className="text-sm text-gray-400 mb-4">{article.date}</p>
            <p className="text-gray-300 mb-6">{article.excerpt}</p>
            <a 
                href={article.sourceUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto text-blue-400 font-semibold hover:text-blue-300 self-start"
            >
                Baca Selengkapnya &rarr;
            </a>
        </div>
    </div>
);

const CatalogSection: React.FC = () => {
  return (
    <section id="news" className="py-20 bg-slate-800/50">
      <div className="container mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-white">Berita & Artikel Terbaru</h2>
          <p className="mt-4 text-lg text-gray-400">Ikuti terus informasi terkini seputar dunia Suzuki.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {NEWS_ARTICLES.map((article, index) => (
                <NewsCard key={index} article={article} />
            ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogSection;