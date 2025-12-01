import { Agent } from '@smythos/sdk';
import * as readline from 'readline';

// ============================================
// 🎯 EXPLAIN LIKE I'M... - Clean Interactive
// ============================================

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(question: string): Promise<string> {
  return new Promise((resolve) => {
    rl.question(question, (answer) => {
      resolve(answer.trim());
    });
  });
}

async function main() {
  
  console.clear();
  console.log('\n' + '═'.repeat(60));
  console.log('  🧠 EXPLAIN LIKE I\'M... ');
  console.log('  Universal Complexity Translator | Built with SmythOS SDK');
  console.log('═'.repeat(60));
  console.log('\n  I can explain ANYTHING to ANYONE.');
  console.log('  Just tell me what to explain and who to explain it for!\n');
  console.log('  Examples: "a 5-year-old", "my grandma", "a CEO",');
  console.log('            "a mass comm student", "a Nigerian farmer",');
  console.log('            "someone who\'s never used a computer"\n');
  console.log('  Type "quit" at any time to exit.\n');
  console.log('═'.repeat(60));

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
- Keep explanations concise (2-4 sentences)
- Use analogies relevant to the audience's world
- Make it memorable and engaging
- Match the cultural context if specified`
  });

  // ============================================
  // 🔄 Interactive Loop
  // ============================================

  let running = true;

  while (running) {
    
    // Question 1: What to explain
    console.log('\n' + '─'.repeat(60));
    const content = await ask('\n📝 What do you want me to explain?\n> ');
    
    if (content.toLowerCase() === 'quit' || content.toLowerCase() === 'q') {
      running = false;
      break;
    }

    if (!content) {
      console.log('\n⚠️  Please enter something to explain.\n');
      continue;
    }

    // Question 2: Who to explain it for
    const audience = await ask('\n🎯 Who should I explain it for?\n> ');

    if (audience.toLowerCase() === 'quit' || audience.toLowerCase() === 'q') {
      running = false;
      break;
    }

    if (!audience) {
      console.log('\n⚠️  Please tell me who to explain it for.\n');
      continue;
    }

    // ============================================
    // 🎬 Generate Explanation
    // ============================================

    console.log('\n' + '═'.repeat(60));
    console.log(`  🎯 Explaining for: ${audience.toUpperCase()}`);
    console.log('═'.repeat(60));

    console.log('\n  ⏳ Thinking...\n');

    try {
      const response = await agent.prompt(
        `Explain the following content for ${audience}.

RULES:
- Keep it to 2-4 sentences maximum
- Use analogies and examples relevant to ${audience}'s world and experience
- Be conversational, warm, and engaging
- Never use jargon unless appropriate for this specific audience
- If a cultural context is implied, use culturally relevant examples

CONTENT TO EXPLAIN:
${content}`
      );

      console.log('─'.repeat(60));
      console.log('\n  💬 EXPLANATION:\n');
      console.log(`  ${response}\n`);
      console.log('═'.repeat(60));

    } catch (error) {
      console.error(`\n  ❌ Error: ${error}\n`);
    }
  }

  // ============================================
  // 👋 Goodbye
  // ============================================

  console.log('\n' + '═'.repeat(60));
  console.log('  👋 Thanks for using EXPLAIN LIKE I\'M...');
  console.log('  Built with SmythOS SDK | SmythOS.com');
  console.log('═'.repeat(60) + '\n');

  rl.close();
  process.exit(0);
}

main().catch(console.error);