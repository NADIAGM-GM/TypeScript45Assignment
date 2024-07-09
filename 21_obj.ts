// // Define an interface for a programming language
interface ProgrammingLanguage{
    Language:string;
    Creator:string;
    year:number;
}
// // Create objects for different programming languages
let languages:ProgrammingLanguage[]=[
    {Language:"JavaScript",Creator:"Brendan Eich",year:1995},
    { Language: "Python", Creator: " van Rossum", year: 1991 },
    { Language: "Java", Creator: "James Gosling", year: 1995 },
    { Language: "TypeScript", Creator: "Microsoft", year: 2012},
    { Language: "C++", Creator: "Bjarne Stroustrup", year: 1985 }
];
// // Print information about each programming language
languages.forEach(language=>{

    console.log("Language: ",language.Language);
    console.log("Creator: ",language.Creator)
    console.log("Year: ",language.year,"\n")
});


