# Google Search Minus AI



A lightweight Firefox extension that automatically appends `-ai` to your Google search queries, preventing Google from generating AI Overviews and returning traditional search results instead.



## Why This Extension?



Google's AI Overviews use significant server-side compute resources to generate summaries for search queries. By appending the `-ai` search operator to your queries, this extension:



- **Prevents AI Overview generation** - Google doesn't run the generative AI layer at all

- **Saves compute resources** - Reduces server-side processing and energy consumption

- **Provides faster results** - Skip the AI generation step entirely

- **Returns traditional search results** - Get the classic Google search experience you're used to



Unlike other solutions that simply hide AI Overviews with CSS (after they've already been generated), this extension modifies the search query before it's sent to Google, preventing the AI computation from happening in the first place.



## Features



- Automatic query modification - no manual typing needed

- Works seamlessly with Firefox's address bar search (Ctrl+T)

- Transparent operation - you can see the `-ai` operator in your search query

- Minimal permissions - only intercepts Google search requests

- Lightweight - no background processing or resource overhead



## Installation



### Temporary Installation (for testing)



1. Download or clone this repository

2. Open Firefox and navigate to `about:debugging`

3. Click "This Firefox" in the left sidebar

4. Click "Load Temporary Add-on"

5. Navigate to the extension folder and select `manifest.json`



### Permanent Installation



To permanently install the extension, you'll need to reload it each time you restart Firefox using the steps above, or package and sign it through Mozilla's Add-on store.



## How It Works



The extension uses Firefox's `webRequest` API to intercept Google search requests before they're sent. When a search is detected, it:



1. Extracts the search query from the URL

2. Appends ` -ai` to the query (if not already present)

3. Redirects to the modified URL



This happens transparently - you won't notice any difference except cleaner, AI-free search results.



## Technical Details



**Files:**

- `manifest.json` - Extension configuration

- `background.js` - Request interception logic



**Permissions:**

- `webRequest` - To intercept search requests

- `webRequestBlocking` - To modify requests before they're sent

- `<all_urls>` - To access Google search URLs



## Contributing



Contributions are welcome! Feel free to open issues or submit pull requests.



## License



MIT License - feel free to use and modify as needed.



## Acknowledgments



Inspired by the need for efficient, compute-conscious web browsing and the desire to access traditional search results without AI-generated summaries.

