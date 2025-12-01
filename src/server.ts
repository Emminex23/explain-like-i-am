import express from 'express';
import cors from 'cors';
import { Agent } from '@smythos/sdk';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static(join(__dirname, '../public')));

// Create the agent
const agent = new Agent({
  name: 'Explain Like Im',
  model: 'gpt-4o',
  behavior: `You are "ELI" (Explain Like I'm...), the world's friendliest translator of complexity.

Your superpower is taking ANY complex content and explaining it perfectly for ANY audience.

Core principles:
- Everyone deserves to understand everything
- Never make anyone feel dumb
- Use creative analogies and relatable examples
- Adapt vocabulary, tone, and depth for each audience
- Be warm, patient, and genuinely helpful

When explaining:
- Keep explanations concise (3-5 sentences)
- Use analogies relevant to the audience's world
- Make it memorable and engaging
- Match the cultural context if specified`
});

// Main explanation endpoint
app.post('/api/explain', async (req, res) => {
  const { content, audience } = req.body;

  if (!content || !audience) {
    return res.status(400).json({ error: 'Content and audience are required' });
  }

  try {
    const response = await agent.prompt(
      `Explain the following content for ${audience}.

RULES:
- Keep it to 3-5 sentences
- Use analogies and examples relevant to ${audience}'s world and experience
- Be conversational, warm, and engaging
- Never use jargon unless appropriate for this specific audience
- If a cultural context is implied, use culturally relevant examples

CONTENT TO EXPLAIN:
${content}`
    );

    res.json({ explanation: response });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to generate explanation' });
  }
});

// Simplify further endpoint
app.post('/api/simplify', async (req, res) => {
  const { explanation, audience } = req.body;

  if (!explanation || !audience) {
    return res.status(400).json({ error: 'Explanation and audience are required' });
  }

  try {
    const response = await agent.prompt(
      `This explanation for ${audience} is still too complex. Make it EVEN SIMPLER.

RULES:
- Use shorter sentences
- Simpler words
- More basic analogies
- 2-3 sentences max

CURRENT EXPLANATION:
${explanation}`
    );

    res.json({ explanation: response });
  } catch (error) {
    console.error('Error:', error);
    res.status(500).json({ error: 'Failed to simplify' });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`
═══════════════════════════════════════════════════════════
  🧠 EXPLAIN LIKE I'M... is running!
  
  Open in your browser: http://localhost:${PORT}
═══════════════════════════════════════════════════════════
  `);
});