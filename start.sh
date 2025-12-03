#!/bin/bash

# Create SmythOS vault directory
mkdir -p ~/.smyth/.sre

# Create vault file with OpenAI key from environment variable
cat > ~/.smyth/.sre/vault.json << EOF
{
  "default": {
    "openai": "$OPENAI_API_KEY",
    "anthropic": "",
    "googleai": "",
    "groq": "",
    "togetherai": ""
  }
}
EOF

echo "✅ SmythOS vault created"

# Start the server
node dist/server.js
