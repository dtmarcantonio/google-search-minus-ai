// Listen for search requests
browser.webRequest.onBeforeRequest.addListener(
  function(details) {
    const url = new URL(details.url);
    
    // Check if this is a Google search
    if (url.hostname.includes('google.com') && url.pathname.includes('/search')) {
      // Get the search query parameter
      const query = url.searchParams.get('q');
      
      // Only modify if query exists and doesn't already end with -ai
      if (query && !query.trim().endsWith('-ai')) {
        // Add -ai to the query
        url.searchParams.set('q', query + ' -ai');
        
        // Redirect to the modified URL
        return { redirectUrl: url.toString() };
      }
    }
    
    // Don't modify other requests
    return {};
  },
  {
    urls: ["*://*.google.com/*"]
  },
  ["blocking"]
);