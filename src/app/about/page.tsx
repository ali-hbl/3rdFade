"use client";

import { motion } from "framer-motion";
import { Camera, Clock, Edit3, Star, Users, Video } from "lucide-react";
import Image from "next/image";

export default function About() {
  const skills = [
    {
      name: "Directing",
      icon: Video,
      description:
        "Turning ideas into compelling scenes through storytelling, performance and visual direction.",
    },
    {
      name: "Editing",
      icon: Edit3,
      description:
        "Shaping rhythm, emotion and narrative through precise and purposeful editing.",
    },
    {
      name: "Cinematography",
      icon: Camera,
      description:
        "Creating strong compositions and camera movements that serve the story and its atmosphere.",
    },
    {
      name: "Post-Production",
      icon: Edit3,
      description:
        "Refining every project through sound design, original music, color, visual effects and final finishing.",
    },
  ];

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
              About Me
            </h1>
            <div className="text-xl text-gray-300 max-w-3xl mx-auto space-y-6">
              <p>
                I’m a filmmaker and creative director driven by visual
                storytelling, rhythm and atmosphere.
              </p>
              <p>
                My work spans short films, commercials and music videos,
                combining cinematic imagery, art direction and emerging creative
                technologies to build distinctive visual experiences.
              </p>
              <p>
                With a background in music, I approach filmmaking with a strong
                sense of rhythm, emotion and timing - from the first idea to the
                final edit.
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-4xl font-bold font-playfair text-white mb-8">
                My Journey
              </h2>
              <div className="space-y-6 text-gray-300">
                <p className="text-lg leading-relaxed">
                  My creative journey began with music long before I moved into
                  filmmaking. Years spent playing and creating music shaped the
                  way I understand rhythm, emotion, dynamics and storytelling.
                </p>
                <p className="text-lg leading-relaxed">
                  My interest in visual creation grew naturally through filming
                  and editing my own musical projects, as well as creating
                  videos for other musicians. Over time, filmmaking became
                  another way for me to express ideas, combining directing,
                  cinematography, editing, sound and storytelling.
                </p>
                <p className="text-lg leading-relaxed">
                  More recently, I began integrating new creative technologies,
                  including AI-assisted production, into my workflow. Not as a
                  replacement for traditional filmmaking, but as an additional
                  creative tool that allows me to explore ideas, worlds and
                  visual possibilities that would otherwise be difficult to
                  achieve.
                </p>
                <p className="text-lg leading-relaxed">
                  Today, I continue to develop both sides of my work -
                  traditional filmmaking and emerging production techniques -
                  with the same goal: turning an idea into a strong and complete
                  visual experience.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="aspect-square bg-gradient-to-br from-red-500/20 to-orange-500/20 rounded-3xl flex items-center justify-center">
                <div className="text-center">
                  <Image
                    src="/picture3.png"
                    alt="Profile photo"
                    fill
                    className="mx-auto mb-4 object-cover object-[0px_-80px] sm:object-[0px_-40px] rounded-3xl"
                    priority
                  />
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {skills.map((skill, index) => {
              const Icon = skill.icon;
              return (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.8, delay: index * 0.2 }}
                  viewport={{ once: true }}
                  className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6"
                >
                  <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-gradient-to-r from-red-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl font-semibold text-white">
                      {skill.name}
                    </h3>
                  </div>
                  <p className="text-gray-400 leading-relaxed">
                    {skill.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-gradient-to-r from-gray-900 to-black">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl font-bold font-playfair text-white mb-6">
              My Values
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Great work is not only about strong ideas - it is also about how
              they are brought to life. I value attention to detail, open
              collaboration and reliability throughout every stage of a project.
              For me, creativity and professionalism should always go hand in
              hand.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Star className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Excellence
              </h3>
              <p className="text-gray-400">
                I pay close attention to every detail, from the initial concept
                to the final frame. I always aim to deliver work that feels
                polished, intentional and visually strong.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Collaboration
              </h3>
              <p className="text-gray-400">
                The best ideas often grow through collaboration. I value clear
                communication, constructive feedback and working together toward
                a shared creative vision.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              viewport={{ once: true }}
              className="text-center"
            >
              <div className="w-16 h-16 bg-gradient-to-r from-red-500 to-orange-500 rounded-full flex items-center justify-center mx-auto mb-6">
                <Clock className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-2xl font-semibold text-white mb-4">
                Punctuality
              </h3>
              <p className="text-gray-400">
                Creativity also requires reliability. I take deadlines seriously
                and aim to deliver consistently while maintaining the quality of
                the work.
              </p>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
