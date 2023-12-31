// Array of objects
/* {
    q: `Simplify the expression \\(-3+7\\times 2 \\)`,
    options: [`\\(8\\)`, `\\(11\\)`, `\\(3\\)`, `\\(6\\)`],
    answer: 1,
  },
  {
    q: `Solve for \\(x\\) in \\(x^2+5x+6=0\\)`,
    options: [`\\(x=3,2\\)`, `\\(x=-3,-2\\)`, `\\(x=6,1\\)`, `\\(x=6,-1\\)`],
    answer: 1,
  },
  {
    q: `The quadratic equation is given by \\(x=\\frac{-b\\pm \\sqrt{b^2-4ac}}{2a}\\)`,
    options: ["true", "false"],
    answer: 0,
  },
  {
    q: `Simplify: \\(4^{\\frac{3}{2}}\\)`,
    options: [`\\(2\\)`, `\\(8\\)`, `\\(16\\)`, `\\(32\\)`],
    answer: 1,
  },
  {
    q: `What is \\(22+6\\)?`,
    options: [`\\(99\\)`, `\\(56\\)`, `\\(16\\)`, `\\(28\\)`],
    answer: 3,
  },
  {
    q: "How many squares are there in the following figure?",
    options: ["35", "30", "40", "50"],
    answer: 2,
    img: "img/square.jpg",
  },
  {
    q: "Count the triangles in the picture below.",
    options: ["7", "9", "12", "13"],
    answer: 3,
    img: "img/triangle.jpg",
  },
  {
    q: `Solve for \\(x\\)`,
    options: [`\\(7\\)`, `\\(9\\)`, `\\(12\\)`, `\\(13\\)`],
    answer: 3,
  }, */
const quiz = [
  
  {
    /* Direct Variation */
    q: `\\(y\\) varies directly as \\(x\\)`,
    options: [`\\(y=kx\\)`, `\\(y=kx^2\\)`, `\\(y=kx^3\\)`, `\\(y=k\\sqrt{x}\\)`],
    answer: 0,
  },
  {
    q: `\\(m\\) varies directly as the square of \\(n\\)`,
    options: [`\\(m=k\\sqrt{n}\\)`, `\\(m=kn^2\\)`, `\\(m=kn^3\\)`, `\\(m=k\\sqrt[3]{n}\\)`],
    answer: 1,
  },
  {
    q: `\\(A\\) varies directly as the square root of \\(b\\)`,
    options: [`\\(A=kb\\)`, `\\(A=kb^2\\)`, `\\(A=k\\sqrt[3]{b}\\)`, `\\(A=k\\sqrt{b}\\)`],
    answer: 3,
  },
  {
    q: `\\(C\\) is directly proportional to the fourth root of \\(x\\)`,
    options: [`\\(C=k\\sqrt[4]{x}\\)`, `\\(C=kx^4\\)`, `\\(C=kx^{\\frac{1}{2}}\\)`, `\\(C=k\\sqrt{x}\\)`],
    answer: 0,
  },
  {
    q: `The Area \\(A\\) of a square varies directly as the square of its side \\(s\\)`,
    options: [`\\(A=ks^2\\)`, `\\(A=ks^\\frac{1}{2}\\)`, `\\(A=ks^{\\frac{1}{4}}\\)`, `\\(A=k\\sqrt{s}\\)`],
    answer: 0,
  },
  {
    q: ` \\(J\\) varies directly as the square root of \\(M\\)`,
    options: [`\\(J=kM^2\\)`, `\\(J=k\\sqrt{M}\\)`, `\\(J=kM^{\\frac{1}{3}}\\)`, `\\(J=k\\sqrt[3]{M}\\)`],
    answer: 1,
  },
  {
    q: `The distance \\(d\\) covered by a free-falling object varies directly as the square of the time \\(t\\) elapsed`,
    options: [`\\(d=kt\\)`, `\\(V=\\dfrac{k}{t^2}\\)`, `\\(d=kt^2\\)`, `\\(d=k\\sqrt{t}\\)`],
    answer: 2,
  },
  {
    q: ` The volume \\(V\\) of a gas varies directly as the absolute temperature \\(T\\)`,
    options: [`\\(V=kT^2\\)`, `\\(V=\\dfrac{k}{T}\\)`, `\\(V=kT\\)`, `\\(V=k\\sqrt{T}\\)`],
    answer: 2,
  },
  {
    q: `The area \\(A\\) of a circle varies directly as the square of its radius \\(r\\)`,
    options: [`\\(A=kr^2\\)`, `\\(A=\\dfrac{k}{r^2}\\)`, `\\(A=kr\\)`, `\\(A=k\\sqrt{r}\\)`],
    answer: 0,
  },
  {
    q: `The number of watts  \\(W\\) of power generated by a windmill varies directly with the cube of the wind speed \\(S\\) in miles per hour`,
    options: [`\\(W=kS^3\\)`, `\\(W=\\dfrac{k}{S^3}\\)`, `\\(W=kS\\)`, `\\(W=k\\sqrt[3]{S}\\)`],
    answer: 0,
  },
    /* Inverse Variation */
  {
    q: `\\(x\\) varies inversely as  \\(y\\)`,
    options: [`\\(x=\\dfrac{k}{y^2}\\)`, `\\(x=\\dfrac{k}{y}\\)`, `\\(x=\\dfrac{k}{y^3}\\)`, `\\(x=\\dfrac{k}{\\sqrt{y}}\\)`],
    answer: 1,
  },
  {
    q: `\\(f\\) varies inversely as  the fourth root of \\(g\\)`,
    options: [`\\(f=\\dfrac{k}{\\sqrt[4]{g}}\\)`, `\\(f=\\dfrac{k}{g}\\)`, `\\(f=\\dfrac{k}{g^4}\\)`, `\\(f=\\dfrac{k}{\\sqrt[3]{g}}\\)`],
    answer: 0,
  },
  {
    q: `\\(W\\) varies inversely as  the fifth power of \\(V\\)`,
    options: [`\\(W=\\dfrac{k}{\\sqrt[5]{V}}\\)`, `\\(W=\\dfrac{k}{5V}\\)`, `\\(W=\\dfrac{k}{V^5}\\)`, `\\(W=\\dfrac{k}{\\sqrt[3]{V}}\\)`],
    answer: 2,
  },
  {
    q: `\\(p\\) is inversely proportional  to the square  of \\(t\\)`,
    options: [`\\(p=\\dfrac{k}{\\sqrt{t}}\\)`, `\\(p=\\dfrac{k}{2t}\\)`, `\\(p=\\dfrac{k}{t^2}\\)`, `\\(p=\\dfrac{k}{\\sqrt[3]{t}}\\)`],
    answer: 2,
  },
  {
    q: `\\(z\\) is inversely proportional  to the cube  of \\(w\\)`,
    options: [`\\(z=\\dfrac{k}{\\sqrt[3]{w}}\\)`, `\\(z=\\dfrac{k}{w^3}\\)`, `\\(z=\\dfrac{k}{3w}\\)`, `\\(z=\\dfrac{k}{w^{\\frac{1}{3}}}\\)`],
    answer: 1,
  },
  {
    q: `\\(a\\) is inversely proportional  to the seventh power of \\(z\\)`,
    options: [`\\(a=\\dfrac{k}{\\sqrt[7]{z}}\\)`, `\\(a=\\dfrac{k}{z^7}\\)`, `\\(a=\\dfrac{k}{7z}\\)`, `\\(a=\\dfrac{k}{z^{\\frac{1}{7}}}\\)`],
    answer: 1,
  },
  {
    q: `The time \\(t\\) needed to finish a job varies inversely as the number of workers \\(w\\)`,
    options: [`\\(t=\\dfrac{k}{\\sqrt{w}}\\)`, `\\(t=\\dfrac{k}{w^2}\\)`, `\\(t=\\dfrac{k}{w}\\)`, `\\(t=\\dfrac{k}{w^{\\frac{1}{2}}}\\)`],
    answer: 2,
  },
  {
    q: ` \\(E\\) varies inversely as the square of \\(m\\)`,
    options: [`\\(E=\\dfrac{k}{\\sqrt{m}}\\)`, `\\(E=\\dfrac{k}{m^2}\\)`, `\\(E=\\dfrac{k}{m}\\)`, `\\(t=km^2\\)`],
    answer: 1,
  },
  {
    q: ` \\(d\\) varies inversely as the square root of \\(e\\)`,
    options: [`\\(d=k\\sqrt{e}\\)`, `\\(d=\\dfrac{k}{e^2}\\)`, `\\(d=\\dfrac{k}{e}\\)`, `\\(d=\\dfrac{k}{\\sqrt{e}}\\)`],
    answer: 3,
  },
  {
    q: ` The intensity \\(I\\) of light received from a source varies inversely as the square of the distance \\(d\\) from the source`,
    options: [`\\(I=k\\sqrt{d}\\)`, `\\(I=kd^2\\)`, `\\(I=\\dfrac{k}{d}\\)`, `\\(I=\\dfrac{k}{d^2}\\)`],
    answer: 3,
  },
];
