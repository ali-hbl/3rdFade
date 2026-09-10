"use client";

import { motion } from "framer-motion";
import { Calendar, Clock, Eye, Filter, Play, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

export default function Creations() {
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [searchTerm, setSearchTerm] = useState("");

  const categories = [
    { id: "all", name: "All Projects" },
    { id: "commercial", name: "Films" },
    { id: "wedding", name: "Commercials" },
    { id: "corporate", name: "Music videos" },
  ];

  const projects = [
    {
      id: 1,
      title: "Who’s Lying",
      category: "commercial",
      duration: "13:44",
      // views: "125K",
      date: "2025",
      thumbnail: "/thumbnails/WHO'S_LYING_LITE.jpg",
      url: "https://www.youtube.com/watch?v=xs76OuD5ZNU",
      description:
        "A young woman is forced to flee the city when she discovers that a mysterious organization of mutants is hunting her. With the help of a trusted friend, she must escape while uncovering a power within herself she never knew existed.",
    },
    {
      id: 2,
      title: "Goldorak",
      category: "commercial",
      duration: "8:12",
      // views: "89K",
      date: "2026",
      thumbnail: "/thumbnails/GOLDORAK.png",
      url: "https://www.youtube.com/watch?v=52SvGtmte3Q",
      description:
        "A cinematic tribute reimagining the iconic Goldorak universe through a modern visual approach. The project reached over 500K views, combining nostalgia, storytelling and cinematic imagery.",
    },
    {
      id: 3,
      title: "Lonely time",
      category: "corporate",
      duration: "3:14",
      // views: "256K",
      date: "2025",
      thumbnail: "/thumbnails/LONELY_TIME.png",
      url: "https://www.youtube.com/watch?v=JNwDhtfoo78",
      description:
        "A music video exploring the loneliness hidden behind our hyperconnected lives. Surrounded by screens and social networks, we have never been more connected - yet we can still feel deeply alone.",
    },
    {
      id: 4,
      title: "AERON Car Commercial",
      category: "commercial",
      duration: "0:35",
      views: "67K",
      date: "2026",
      thumbnail: "/thumbnails/AERON_CAR.png",
      url: "https://www.youtube.com/shorts/OhRZ5IpEPVM",
      description:
        "A cinematic car commercial created to highlight AERON's design, movement and visual identity.",
    },
  ];

  const filteredProjects = projects.filter((project) => {
    const matchesCategory =
      selectedCategory === "all" || project.category === selectedCategory;
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen pt-16">
      {/* Hero Section */}
      <section className="relative py-20 bg-gradient-to-br from-gray-900 via-black to-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl sm:text-6xl font-bold font-playfair text-white mb-6">
              My Work
            </h1>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore a selection of my work across films, commercials and music
              videos, each shaped by a distinct creative approach and visual
              identity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Filters Section */}
      <section className="py-12 bg-black border-b border-gray-800">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-6 items-center justify-between">
            {/* Search Bar */}
            <div className="relative flex-1 max-w-md">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-3 bg-gray-800 border border-gray-700 rounded-lg text-white placeholder-gray-400 focus:outline-none focus:border-red-500 transition-colors"
              />
            </div>

            {/* Category Filters */}
            <div className="flex flex-wrap gap-2">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                    selectedCategory === category.id
                      ? "bg-gradient-to-r from-red-500 to-orange-500 text-white"
                      : "bg-gray-800 text-gray-300 hover:bg-gray-700"
                  }`}
                >
                  {category.name}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          {filteredProjects.length === 0 ? (
            <div className="text-center py-20">
              <Filter className="w-16 h-16 text-gray-400 mx-auto mb-4" />
              <h3 className="text-2xl font-semibold text-white mb-2">
                No projects found
              </h3>
              <p className="text-gray-400">
                Try adjusting your search or filter criteria.
              </p>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="group cursor-pointer"
                >
                  <div className="relative overflow-hidden rounded-xl bg-gray-800 aspect-video mb-4">
                    {project.url ? (
                      <a
                        href={project.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Watch ${project.title} on YouTube`}
                        className="absolute inset-0"
                      >
                        <Image
                          src={project.thumbnail}
                          alt={project.title}
                          fill
                          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                          className="object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                          <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                            <Play className="w-8 h-8 text-white ml-1" />
                          </div>
                        </div>
                        <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors" />
                      </a>
                    ) : (
                      <div className="absolute inset-0 bg-gradient-to-br from-red-500/20 to-orange-500/20 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center group-hover:bg-white/30 transition-colors">
                          <Play className="w-8 h-8 text-white ml-1" />
                        </div>
                      </div>
                    )}

                    {/* Project Info Overlay */}
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between text-white">
                        <div className="flex items-center space-x-4">
                          <div className="flex items-center space-x-1">
                            <Clock className="w-4 h-4" />
                            <span className="text-sm">{project.duration}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Eye className="w-4 h-4" />
                            <span className="text-sm">{project.views}</span>
                          </div>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Calendar className="w-4 h-4" />
                          <span className="text-sm">{project.date}</span>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-xl font-semibold text-white mb-2 group-hover:text-red-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 text-sm leading-relaxed">
                      {project.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold font-playfair text-white mb-6">
              Ready to create something together?
            </h2>
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Every project is a new creative adventure. Let’s talk about your
              vision and turn it into something unique, compelling and
              memorable.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="bg-gradient-to-r from-red-500 to-orange-500 text-white px-8 py-4 rounded-full font-semibold text-lg hover:shadow-2xl hover:shadow-red-500/25 transition-all duration-300">
                Start a Project
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-full font-semibold text-lg hover:bg-white hover:text-black transition-all duration-300">
                See More Projects
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
