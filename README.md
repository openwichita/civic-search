# civic-search

A simple node wrapper for the Google Civic Info API.

## How to use

```
var CivicSearch = require('civic-search');
```

### elections

```
CivicSearch.elections()
.then(function(electionData) {
  // electionData = {
  //   elections: [
  //     {
  //       id: '1234',
  //       name: 'Election Name',
  //       date: '1990-02-09',
  //       division: {
  //         state: 'ks',
  //         place: 'wichita'
  //       }
  //     }
  //   ]
  // }
});
```
