from openai import AsyncOpenAI
import os
import asyncio

# Verify that the environment variable is set
api_key = os.getenv("OPENAI_API_KEY")
if not api_key:
    raise EnvironmentError("OPENAI_API_KEY no está definida en las variables de entorno")
# Import the AsyncOpenAI client from the OpenAI library


# Create the OpenAI client with the API key
openai_client = AsyncOpenAI(api_key=api_key)

# Example usage: chat completion
async def main():
    response = await openai_client.chat.completions.create(
        model="gpt-4",
        messages=[
            {"role": "user", "content": "Hello, write the following: This test works."},
        ]
    )
    print(response.choices[0].message.content)

if __name__ == "__main__":
    asyncio.run(main())
