

// parsePattern(abc|d*(ef|gh)ij)
let aa = 
{ type: "图案",
  alternateives: // Array(2) 
  [/*0*/{ type: "Alternateive", start: 0, end: 3, 
          raw: "abc",
          elements: // Array(4) 
          [/*0*/{type: "Charcter",start: 0,end: 1,raw: "a", val: "a"},
           /*1*/{type: "Charcter",start: 1,end: 2,raw: "b", val: "b"},
           /*2*/{type: "Charcter",start: 2,end: 3,raw: "c", val: "c"},],},
   /*1*/{ type:"Alternateive", start: 4, end: 15, 
          raw: "d*(ef|gh)gh",
          elements: // Array(4) 
          [/*0*/{ type: "Quantifier",max: Infinity, min: 0, start: 4,end: 6, 
                  greedy: true, //没有 '?' 为贪婪匹配
                  raw: "d*", 
                  element: {type: "Charcter",start: 4,end: 5,raw: "d", val: "d"},},
           /*1*/{ type:"CaptureGroup",start: 6,end: 12,raw: "e", val: "e", 
                  raw: "(ef|gh)",
                  alternateives: // Array(2) 
                  [/*0*/{ type: "Alternateive", start: 7, end: 9, 
                          raw: "ef",
                          elements: // Array(2) 
                          [/*0*/{type: "Charcter",start: 7,end: 8,raw: "e", val: "e"},
                           /*1*/{type: "Charcter",start: 8,end: 9,raw: "f", val: "f"},],},
                   /*1*/{ type: "Alternateive", start: 7, end: 9, 
                          raw: "ef",
                          elements: // Array(2) 
                          [/*0*/{type: "Charcter",start: 10,end: 11,raw: "g", val: "g"},
                           /*1*/{type: "Charcter",start: 11,end: 12,raw: "h", val: "h"},],},],},
           /*2*/{type:"Charcter",start: 13,end: 14,raw: "i", val: "i"},
           /*3*/{type:"Charcter",start: 14,end: 15,raw: "j", val: "jh"},],},],
}




