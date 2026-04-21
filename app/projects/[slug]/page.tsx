"use client";

import { motion } from "framer-motion";
import { ArrowLeft, ExternalLink, Github } from "lucide-react";
import Link from "next/link";
import { useParams } from "next/navigation";

// Sample project data - in production, this would come from a database
const PROJECT_DATA: Record<string, any> = {
  "ai-communication-agent": {
    title: "AI Communication Agent",
    description:
      "Intelligent chatbot system powered by LLMs with context awareness and multi-language support.",
    technologies: ["Python", "LLM", "PostgreSQL", "FastAPI", "Redis"],
    date: "2024",
    demoLink: "https://example.com",
    githubLink: "https://github.com/bakibillahrahat",
    content: `
## What problem I solved

Modern customer service systems struggle with handling complex queries across multiple languages while maintaining context. Traditional chatbots fail when faced with nuanced questions that require understanding of previous interactions.

This project addresses the need for an intelligent communication system that can:
- Understand context across multiple conversation turns
- Support multiple languages with automatic detection
- Integrate with various backend systems seamlessly
- Scale to handle thousands of concurrent conversations

## How I solved it

### Architecture Overview
The system uses a microservices architecture with the following components:

\`\`\`python
# Core chat service
from fastapi import FastAPI
from langchain import OpenAI, ConversationChain
import asyncio

app = FastAPI()

class ChatService:
    def __init__(self):
        self.llm = OpenAI(model="gpt-4")
        self.memory = ConversationMemory()
        
    async def process_message(self, user_id: str, message: str):
        # Process with context from database
        context = await self.get_user_context(user_id)
        response = await self.llm.apredict(
            input=message,
            context=context
        )
        return response
\`\`\`

### Key Features Implemented

1. **Context Awareness**: Built a custom memory system using PostgreSQL that stores conversation history with semantic embeddings for efficient retrieval.

2. **Multi-language Support**: Implemented language detection using FastText and automatic translation via Google Cloud Translate API.

3. **Real-time Communication**: Used WebSockets for real-time bidirectional communication with automatic reconnection logic.

4. **Rate Limiting & Caching**: Implemented Redis-based caching to reduce API calls by 70% and prevent abuse.

### Technology Stack

- **Backend**: FastAPI with Python 3.11
- **LLM**: OpenAI GPT-4 with LangChain framework
- **Database**: PostgreSQL with pgvector extension for embeddings
- **Caching**: Redis for conversation state and rate limiting
- **Deployment**: Docker containers on Kubernetes

## Challenges I faced

### Challenge 1: Context Window Limitations
**Problem**: GPT-4 has a 8k token limit, but conversations can exceed this quickly.

**Solution**: Implemented a smart summarization system that extracts key information before the context exceeds limits, ensuring no important information is lost while maintaining coherence.

### Challenge 2: Language Model Hallucinations
**Problem**: The LLM sometimes generated factually incorrect responses.

**Solution**: Built a verification layer that checks responses against a knowledge base before sending them to users. 

\`\`\`python
async def verify_response(response: str) -> bool:
    # Check against knowledge base
    relevant_docs = await kb.search(response, top_k=3)
    score = calculate_relevance(response, relevant_docs)
    return score > 0.7
\`\`\`

### Challenge 3: Scaling to Production
**Problem**: The initial solution couldn't handle 1000+ concurrent conversations.

**Solution**: Implemented:
- Connection pooling with min/max limits
- Asynchronous request processing
- Load balancing across multiple worker instances
- Prometheus metrics for monitoring

The final system now handles 5000+ concurrent users with <200ms average response time.

### Challenge 4: Cost Optimization
**Problem**: API calls to OpenAI were expensive at scale.

**Solution**: Implemented a tiered system:
- Cache frequent queries (saves 60% of API calls)
- Use smaller models for simple queries
- Implement rate limiting per user
- Monitor spending in real-time

This reduced costs by 40% while maintaining service quality.
    `,
  },
  "analytics-dashboard": {
    title: "Real-time Analytics Dashboard",
    description:
      "High-performance dashboard analyzing 1M+ events daily with WebSockets and Supabase.",
    technologies: ["React", "Node.js", "WebSocket", "PostgreSQL", "Chart.js"],
    date: "2023",
    demoLink: "https://example.com",
    githubLink: "https://github.com/bakibillahrahat",
    content: `
## What problem I solved

Companies processing millions of events daily need to visualize trends and anomalies in real-time. Traditional dashboards that refresh every few minutes miss critical insights that require sub-second updates.

## How I solved it

Built a real-time analytics dashboard using WebSockets for instant data updates, optimized PostgreSQL queries, and React frontend with efficient rendering strategies.

\`\`\`javascript
// Real-time data subscription
useEffect(() => {
  const socket = io(SOCKET_SERVER_URL);
  socket.on('event:update', (data) => {
    setMetrics(prev => ({
      ...prev,
      [data.metric]: data.value
    }));
  });
}, []);
\`\`\`

## Challenges I faced

### Performance Optimization
Rendering 1M events per day required sophisticated caching and aggregation strategies. Implemented time-series data reduction and sampling techniques.

### WebSocket Connection Stability
Maintaining 5000+ concurrent WebSocket connections required connection pooling, heartbeat mechanisms, and automatic reconnection.

The system now processes events with <50ms latency and 99.9% uptime.
    `,
  },
};

export default function ProjectDetail() {
  const params = useParams();
  const slug = params.slug as string;
  const project = PROJECT_DATA[slug];

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-white">Project Not Found</h1>
          <p className="text-white/60">The project you're looking for doesn't exist.</p>
          <Link href="/#projects" className="gradient-btn inline-flex">
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-3xl mx-auto">
        {/* Back Button */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          className="mb-8"
        >
          <Link
            href="/#projects"
            className="inline-flex items-center gap-2 text-white/60 hover:text-white transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Projects
          </Link>
        </motion.div>

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="gap-12"
        >
          <div className="space-y-6">
            <div>
              <p className="text-white/50 text-sm mb-2">{project.date}</p>
              <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
                {project.title}
              </h1>
              <p className="text-xl text-white/70 leading-relaxed">
                {project.description}
              </p>
            </div>

            {/* Technologies */}
            <div className="flex flex-wrap gap-2 pt-4">
              {project.technologies.map((tech: string, idx: number) => (
                <div key={idx} className="tech-tag">
                  {tech}
                </div>
              ))}
            </div>

            {/* Links */}
            <div className="flex gap-3 pt-6">
              {project.demoLink && (
                <motion.a
                  href={project.demoLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="gradient-btn inline-flex"
                  whileHover={{ scale: 1.05 }}
                >
                  <ExternalLink className="w-4 h-4" />
                  Live Demo
                </motion.a>
              )}
              {project.githubLink && (
                <motion.a
                  href={project.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="secondary-btn inline-flex"
                  whileHover={{ scale: 1.05 }}
                >
                  <Github className="w-4 h-4" />
                  View Code
                </motion.a>
              )}
            </div>
          </div>
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mt-16 mdx-content prose prose-invert max-w-none"
        >
          {project.content.split("##").map((section: string, idx: number) => {
            if (!section.trim()) return null;
            const [title, ...content] = section.trim().split("\n");
            return (
              <div key={idx} className="mb-12">
                {idx > 0 && <h2 className="text-2xl font-bold mt-6 mb-3 text-white/90">## {title.trim()}</h2>}
                <div className="text-white/70 whitespace-pre-wrap leading-relaxed">
                  {content.join("\n").split("```").map((block: string, bIdx: number) => {
                    if (bIdx % 2 === 0) {
                      return (
                        <p key={bIdx} className="mb-4">
                          {block}
                        </p>
                      );
                    } else {
                      return (
                        <pre
                          key={bIdx}
                          className="bg-[#0d0d0d] border border-white/10 rounded-lg p-4 overflow-x-auto mb-4 text-sm"
                        >
                          <code>{block}</code>
                        </pre>
                      );
                    }
                  })}
                </div>
              </div>
            );
          })}
        </motion.div>

        {/* Navigation */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-16 pt-8 border-t border-white/10 flex justify-between"
        >
          <Link
            href="/#projects"
            className="text-white/60 hover:text-white transition-colors flex items-center gap-2 underline-effect"
          >
            <ArrowLeft className="w-4 h-4" />
            All Projects
          </Link>
          <Link
            href="/#contact"
            className="text-white/60 hover:text-white transition-colors flex items-center gap-2 underline-effect"
          >
            Get in Touch
            <ExternalLink className="w-4 h-4" />
          </Link>
        </motion.div>
      </div>
    </div>
  );
}
