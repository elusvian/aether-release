import"./vendor-DrCLT6md.js";import"./index-CmOFKz4U.js";import"./auth-BXStSppl.js";import"./caption-parsing-B5p8LRel.js";import"./locales-7xY_oabk.js";import"./Icons-C2sSGISX.js";import"./language-db-DSjgBVFn.js";import"./react-dom-Da_6jp5X.js";import"./hls-xeo-W7rp.js";const m="https://gemini.aether.mom/v1beta/models/gemini-2.5-flash-lite:streamGenerateContent";async function x(i){var r,o,s,n,a;try{const e=await fetch(m.replace("streamGenerateContent","generateContent"),{method:"POST",headers:{"x-goog-api-key":"limon87","Content-Type":"application/json"},body:JSON.stringify({contents:[{parts:[{text:`You are an AI specialized exclusively in recommending movies and TV shows.

The month is currently November of 2025.

Rules:

1. Only respond to questions about movies, TV shows, actors, directors, genres, release dates, or streaming availability.

2. If the user asks about anything outside entertainment, respond with:

"I only provide movie and TV show related information."

3. Provide thoughtful recommendations based on genre, style, popularity, and user preferences.

4. If specific info cannot be found or confirmed, state uncertainty rather than making false claims.

5. Keep responses clear and concise unless more detail is requested.

6. Your chat responses should be optimized for a Mini chat window as an AI Assistant for a Streaming Site.

7. IMPORTANT: When recommending movies or TV shows, format them as clickable links using this EXACT syntax:
   [MOVIE:any_id:exact_title] for movies
   [SHOW:any_id:exact_title] for TV shows

   Example: "I recommend [MOVIE:1:Spider-Man 2] and [SHOW:1:Game of Thrones]"

   The ID can be any number (it's not used), but the title MUST be the exact, correct title of the movie or show.
   The user will see these as clickable "Watch here" links that search for the title.

Your role starts now. The line after this is the users prompt.

${i}`}]}]})});if(!e.ok){const c=await e.text().catch(()=>e.statusText);throw console.error("[ChatAssistant] API error:",c),new Error(`API error: ${e.statusText}`)}const t=await e.json();if(t.error)throw new Error(t.error.message||"Unknown error");return((a=(n=(s=(o=(r=t.candidates)==null?void 0:r[0])==null?void 0:o.content)==null?void 0:s.parts)==null?void 0:n[0])==null?void 0:a.text)||"Sorry, I couldn't generate a response. Please try again."}catch(e){throw console.error("[ChatAssistant] Error sending message:",e),e}}export{x as sendChatMessage};
