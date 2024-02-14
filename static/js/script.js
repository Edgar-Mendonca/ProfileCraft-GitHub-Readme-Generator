// Function to generate the README content
function generateReadmeContent() {
    // Collect user input values
    const username = document.getElementById("username").value;
    const fullName = document.getElementById("fullName").value;
    const aboutMe = document.getElementById("aboutMe").value;

    // Collect user input values for Working On section
    const workingOnText = document.getElementById("workingOnText").value;
    const workingOnURL = document.getElementById("workingOnURL").value;

    // Collect user input values for Collaborate section
    const collaborateText = document.getElementById("collaborateText").value;
    const collaborateURL = document.getElementById("collaborateURL").value;

    // Collect user input values for Help With section
    const helpWithText = document.getElementById("helpWithText").value;
    const helpWithURL = document.getElementById("helpWithURL").value;

    // Collect user input values for Learning section
    const learningText = document.getElementById("learningText").value;
    const learningURL = document.getElementById("learningURL").value;

    // Collect user input values for Ask Me section
    const askMeText = document.getElementById("askMeText").value;
    const askMeURL = document.getElementById("askMeURL").value;

    // Collect user input values for Reach Me section
    const reachMeText = document.getElementById("reachMeText").value;
    const reachMeURL = document.getElementById("reachMeURL").value;

    // Collect user input values for Projects section
    const projectsText = document.getElementById("projectsText").value;
    const projectsURL = document.getElementById("projectsURL").value;

    // Collect user input values for Articles section
    const articlesText = document.getElementById("articlesText").value;
    const articlesURL = document.getElementById("articlesURL").value;

    // Collect user input values for Experiences section
    const experiencesText = document.getElementById("experiencesText").value;
    const experiencesURL = document.getElementById("experiencesURL").value;

    // Collect user input values for Fun Fact section
    const funFactText = document.getElementById("funFactText").value;

    // Collect user input values for Connect with me section
    const githubUsername = document.getElementById("githubUsername").value;
    const youtubeUsername = document.getElementById("youtubeUsername").value;

    const twitterUsername = document.getElementById("twitterUsername").value;
    const linkedinUsername = document.getElementById("linkedinUsername").value;

    const facebookUsername = document.getElementById("facebookUsername").value;
    const instagramUsername = document.getElementById("instagramUsername").value;

    const stackoverflowUsername = document.getElementById("stackoverflowUsername").value;
    const rssFeed = document.getElementById("rssFeed").value;

    const devtoUsername = document.getElementById("devtoUsername").value;
    const mediumUsername = document.getElementById("mediumUsername").value;

    const codepenUsername = document.getElementById("codepenUsername").value;
    const codesandboxUsername = document.getElementById("codesandboxUsername").value;

    const gitlabUsername = document.getElementById("gitlabUsername").value;
    const bitbucketUsername = document.getElementById("bitbucketUsername").value;

    // Collect user input values for Skills Section
    const selectedProgrammingLanguages = getSelectedProgrammingLanguages(); 
    const selectedFrontend = getSelectedFrontend(); 
    const selectedBackend = getSelectedBackend();
    const selectedAIML = getSelectedAIML();





    // Construct README content
    let readmeContent = `# ${fullName ? fullName : username}\n\n`;
    readmeContent += `![Profile Views](https://komarev.com/ghpvc/?username=${username}&color=green)\n\n`;
    readmeContent += `## 📝 About Me\n${aboutMe ? aboutMe : 'Add a brief description about yourself.'}\n\n`;

    // Working On
    if (workingOnText || workingOnURL) {
        readmeContent += `## 🛠️ I’m currently working on\n`;
        readmeContent += `${workingOnText ? `${workingOnText}` : ''}${workingOnURL ? ` ([${workingOnURL}](${workingOnURL}))` : ''}\n\n`;
    }

    // Collaborate
    if (collaborateText || collaborateURL) {
        readmeContent += `## 🧑‍🤝‍🧑 I’m looking to collaborate on\n`;
        readmeContent += `${collaborateText ? `${collaborateText}` : ''}${collaborateURL ? ` ([${collaborateURL}](${collaborateURL}))` : ''}\n\n`;
    }

    // Help With
    if (helpWithText || helpWithURL) {
        readmeContent += `## 💁 I’m looking for help with\n`;
        readmeContent += `${helpWithText ? `${helpWithText}` : ''}${helpWithURL ? ` ([${helpWithURL}](${helpWithURL}))` : ''}\n\n`;
    }

    // Learning
    if (learningText || learningURL) {
        readmeContent += `## 📒 I’m currently learning\n`;
        readmeContent += `${learningText ? `${learningText}` : ''}${learningURL ? ` ([${learningURL}](${learningURL}))` : ''}\n\n`;
    }

    // Ask Me
    if (askMeText || askMeURL) {
        readmeContent += `## 💬 Ask me about\n`;
        readmeContent += `${askMeText ? `${askMeText}` : ''}${askMeURL ? ` ([${askMeURL}](${askMeURL}))` : ''}\n\n`;
    }

    // Reach Me
    if (reachMeText || reachMeURL) {
        readmeContent += `## 📬 How to reach me\n`;
        readmeContent += `${reachMeText ? `${reachMeText}` : ''}${reachMeURL ? ` ([${reachMeURL}](${reachMeURL}))` : ''}\n\n`;
    }

    // Projects
    if (projectsText || projectsURL) {
        readmeContent += `## 💻 All of my projects are available at\n`;
        readmeContent += `${projectsText ? `${projectsText}` : ''}${projectsURL ? ` ([${projectsURL}](${projectsURL}))` : ''}\n\n`;
    }

    // Articles
    if (articlesText || articlesURL) {
        readmeContent += `## ✍️ I regularly write articles on\n`;
        readmeContent += `${articlesText ? `${articlesText}` : ''}${articlesURL ? ` ([${articlesURL}](${articlesURL}))` : ''}\n\n`;
    }

    // Experiences
    if (experiencesText || experiencesURL) {
        readmeContent += `## 🧑‍💼 Know about my experiences\n`;
        readmeContent += `${experiencesText ? `${experiencesText}` : ''}${experiencesURL ? ` ([${experiencesURL}](${experiencesURL}))` : ''}\n\n`;
    }

    // Fun Fact
    if (funFactText) {
        readmeContent += `## 💡 Fun fact\n`;
        readmeContent += `${funFactText}\n\n`;
    }

    // Connect with me
    readmeContent += `## 🔗 Connect with me\n`;

    if (githubUsername) {
        readmeContent += `<a href="https://github.com/${githubUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/material-outlined/48/github.png" alt="github"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (youtubeUsername) {
        readmeContent += `<a href="https://www.youtube.com/${youtubeUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/youtube-play.png" alt="youtube-play"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (twitterUsername) {
        readmeContent += `<a href="https://twitter.com/${twitterUsername}" target="_blank"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/twitterx--v1.png" alt="twitterx--v1"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (linkedinUsername) {
        readmeContent += `<a href="https://linkedin.com/${linkedinUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/linkedin.png" alt="linkedin"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (facebookUsername) {
        readmeContent += `<a href="https://www.facebook.com/${facebookUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/fluency/48/000000/facebook-new.png" alt="facebook-new"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (instagramUsername) {
        readmeContent += `<a href="https://www.instagram.com/${instagramUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/instagram-new--v1.png" alt="instagram-new--v1"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (stackoverflowUsername) {
        readmeContent += `<a href="https://stackoverflow.com/${stackoverflowUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/stackoverflow.png" alt="stackoverflow"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (rssFeed) {
        readmeContent += `<a href="https://rss.com/${rssFeed}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/rss.png" alt="rss"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (devtoUsername) {
        readmeContent += `<a href="https://dev.to/${devtoUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/windows/48/dev.png" alt="dev"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (mediumUsername) {
        readmeContent += `<a href="https://medium.com/${mediumUsername}" target="_blank"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/medium-logo.png" alt="medium-logo"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (codepenUsername) {
        readmeContent += `<a href="https://codepen.io/${codepenUsername}" target="_blank"><img width="50" height="50" src="https://img.icons8.com/ios-filled/50/codepen.png" alt="codepen"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (codesandboxUsername) {
        readmeContent += `<a href="https://codesandbox.io/${codesandboxUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-codesandbox-an-online-code-editor-and-sharing-web-application-projects-logo-color-tal-revivo.png" alt="external-codesandbox-an-online-code-editor-and-sharing-web-application-projects-logo-color-tal-revivo"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    if (gitlabUsername) {
        readmeContent += `<a href="https://gitlab.com/${gitlabUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/color/48/gitlab.png" alt="gitlab"/></a>&nbsp;&nbsp;&nbsp;`;
    }
    if (bitbucketUsername) {
        readmeContent += `<a href="https://bitbucket.org/${bitbucketUsername}" target="_blank"><img width="48" height="48" src="https://img.icons8.com/external-tal-revivo-shadow-tal-revivo/48/external-bitbucket-is-a-web-based-version-control-repository-hosting-service-logo-shadow-tal-revivo.png" alt="external-bitbucket-is-a-web-based-version-control-repository-hosting-service-logo-shadow-tal-revivo"/></a>&nbsp;&nbsp;&nbsp;`;
    }

    readmeContent += `\n\n`;

    // Add Skills section
    readmeContent += `## ✨ Skills\n`;
    // Add Programming Languages section
    if (selectedProgrammingLanguages.length > 0) {
        readmeContent += '### Programming Languages\n\n';
        selectedProgrammingLanguages.forEach(language => {
            readmeContent += `![${language.name}](${language.icon}?width=48&height=48) &nbsp;&nbsp;&nbsp;`;
        });
        readmeContent += '\n\n';
    }
    // Add Frontend Development section
    if (selectedFrontend.length > 0) {
        readmeContent += '### Frontend Development\n\n';
        selectedFrontend.forEach(language => {
            readmeContent += `![${language.name}](${language.icon}?width=48&height=48) &nbsp;&nbsp;&nbsp;`;
        });
        readmeContent += '\n\n';
    }
    // Add Backend Development section
    if (selectedBackend.length > 0) {
        readmeContent += '### Backend Development\n\n';
        selectedBackend.forEach(language => {
            readmeContent += `![${language.name}](${language.icon}?width=48&height=48) &nbsp;&nbsp;&nbsp;`;
        });
        readmeContent += '\n\n';
    }
    // Add AI/ML section
    if (selectedAIML.length > 0) {
        readmeContent += '### AI/ML\n\n';
        selectedAIML.forEach(language => {
            readmeContent += `![${language.name}](${language.icon}?width=48&height=48) &nbsp;&nbsp;&nbsp;`;
        });
        readmeContent += '\n\n';
    }


    return readmeContent;
}

// Function to get selected programming languages
function getSelectedProgrammingLanguages() {
    const selectedLanguages = [];
    const programmingLanguages = [
        { id: "programmingLanguageC", name: "C", icon: "https://img.icons8.com/color/48/000000/c-programming.png" },
        { id: "programmingLanguageCpp", name: "C++", icon: "https://img.icons8.com/color/48/000000/c-plus-plus-logo.png" },
        { id: "programmingLanguageCSharp", name: "C#", icon: "https://img.icons8.com/color/48/000000/c-sharp-logo.png" },
        { id: "programmingLanguageJava", name: "Java", icon: "https://img.icons8.com/color/48/000000/java-coffee-cup-logo.png" },

        { id: "programmingLanguagePython", name: "Python", icon: "https://img.icons8.com/color/48/000000/python.png" },
        { id: "programmingLanguageJavaScript", name: "JavaScript", icon: "https://img.icons8.com/color/48/000000/javascript.png" },
        { id: "programmingLanguageRuby", name: "Ruby", icon: "https://img.icons8.com/color/48/000000/ruby-programming-language.png" },
        { id: "programmingLanguageSwift", name: "Swift", icon: "https://img.icons8.com/color/48/000000/swift.png" },

        { id: "programmingLanguagePHP", name: "PHP", icon: "https://img.icons8.com/officexs/48/000000/php-logo.png" },
        { id: "programmingLanguageTypeScript", name: "TypeScript", icon: "https://img.icons8.com/color/48/000000/typescript.png" },
        { id: "programmingLanguageGo", name: "Go", icon: "https://img.icons8.com/color/48/000000/golang.png" },
        { id: "programmingLanguageRust", name: "Rust", icon: "https://img.icons8.com/color/48/rust-programming-language.png" },

        { id: "programmingLanguageKotlin", name: "Kotlin", icon: "https://img.icons8.com/color/48/000000/kotlin.png" },
        { id: "programmingLanguageScala", name: "Scala", icon: "https://img.icons8.com/external-tal-revivo-color-tal-revivo/48/external-scala-a-general-purpose-programming-language-with-strong-static-type-system-logo-color-tal-revivo.png" },
        { id: "programmingLanguageHaskell", name: "Haskell", icon: "https://img.icons8.com/color/48/000000/haskell.png" },
        { id: "programmingLanguageLua", name: "Lua", icon: "https://img.icons8.com/color/48/lua-language.png" },

        { id: "programmingLanguageElixir", name: "Elixir", icon: "https://www.vectorlogo.zone/logos/elixir-lang/elixir-lang-icon.svg" },
        { id: "programmingLanguageErlang", name: "Erlang", icon: "https://www.vectorlogo.zone/logos/erlang/erlang-icon.svg" },
        { id: "programmingLanguageCoffeeScript", name: "CoffeeScript", icon: "https://img.icons8.com/external-tal-revivo-bold-tal-revivo/48/external-coffeescript-is-a-little-language-that-compiles-into-javascript-logo-bold-tal-revivo.png" },
        { id: "programmingLanguageObjectiveC", name: "ObjectiveC", icon: "https://www.vectorlogo.zone/logos/apple_objectivec/apple_objectivec-icon.svg" },
    ]; // Define programming languages

    programmingLanguages.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedLanguages.push(language);
        }
    });

    return selectedLanguages;
}

// Function to get selected Frontend Development languages
function getSelectedFrontend() {
    const selectedFrontend = [];
    const frontendLanguages = [
        { id: "frontendLanguageHTML", name: "HTML", icon: "https://img.icons8.com/color/48/000000/html-5.png" },
        { id: "frontendLanguageCSS", name: "CSS", icon: "https://img.icons8.com/color/48/000000/css3.png" },
        { id: "frontendLanguageReact", name: "React", icon: "https://img.icons8.com/color/48/000000/react-native.png" },
        { id: "frontendLanguageVue", name: "Vue", icon: "https://img.icons8.com/color/48/000000/vue-js.png" },

        { id: "frontendLanguageAngular", name: "angular", icon: "https://img.icons8.com/color/48/000000/angularjs.png" },
        { id: "frontendLanguageBootstrap", name: "bootstrap", icon: "https://img.icons8.com/color/48/000000/bootstrap.png" },
        { id: "frontendLanguageMaterialize", name: "materialize", icon: "https://raw.githubusercontent.com/Edgar-Mendonca/ProfileCraft/8a0ba41b55a2490894e1d09eccac7ccf782abb16/static/icons/materialize.svg" },
        { id: "frontendLanguageTailwind", name: "tailwind", icon: "https://img.icons8.com/color/48/tailwind_css.png" },

        { id: "frontendLanguageAngularJS", name: "angularjs", icon: "https://raw.githubusercontent.com/Edgar-Mendonca/ProfileCraft/c46702fc15f871acb4945b950e16235859404f48/static/icons/AngularJS.svg" },
        { id: "frontendLanguageBackboneJS", name: "backbonejs", icon: "https://www.vectorlogo.zone/logos/backbonejs/backbonejs-icon.svg" },
        { id: "frontendLanguageVuetify", name: "vuetify", icon: "https://raw.githubusercontent.com/Edgar-Mendonca/ProfileCraft/b2e02430c24681c8ca887cce8d57a77c40bb02e6/static/icons/vuetify.svg" },
        { id: "frontendLanguageSass", name: "sass", icon: "https://img.icons8.com/color/48/000000/sass.png" },

        { id: "frontendLanguageSvelte", name: "svelte", icon: "https://www.vectorlogo.zone/logos/sveltetechnology/sveltetechnology-icon.svg" },
        { id: "frontendLanguagePugJS", name: "pugjs", icon: "https://img.icons8.com/color/48/000000/pug.png" },
        { id: "frontendLanguageRedux", name: "redux", icon: "https://img.icons8.com/color/48/000000/redux.png" },
        { id: "frontendLanguageBulma", name: "bulma", icon: "https://vectorwiki.com/images/ZzFcA__bulma.svg" },
    ]; // Define Frontend languages

    frontendLanguages.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedFrontend.push(language);
        }
    });

    return selectedFrontend;
}


// Function to get selected Backend Development languages
function getSelectedBackend() {
    const selectedBackend = [];
    const backendLanguages = [
        { id: "backendLanguageNodeJS", name: "nodejs", icon: "https://img.icons8.com/color/48/000000/nodejs.png" },
        { id: "backendLanguageExpressJS", name: "expressjs", icon: "https://img.icons8.com/ios/50/express-js.png" },
        { id: "backendLanguageDjango", name: "django", icon: "https://img.icons8.com/color/48/000000/django.png" },
        { id: "backendLanguageFlask", name: "flask", icon: "https://img.icons8.com/color/48/000000/flask.png" },

        { id: "backendLanguageSpring", name: "spring", icon: "https://www.vectorlogo.zone/logos/springio/springio-icon.svg" },
        { id: "backendLanguageGraphQL", name: "graphql", icon: "https://img.icons8.com/color/48/000000/graphql.png" },
        { id: "backendLanguageKafka", name: "kafka", icon: "https://www.vectorlogo.zone/logos/apache_kafka/apache_kafka-icon.svg" },
        { id: "backendLanguageNestJS", name: "nestjs", icon: "https://img.icons8.com/color/48/000000/nestjs.png" },

        { id: "backendLanguageSolr", name: "solr", icon: "https://www.vectorlogo.zone/logos/apache_solr/apache_solr-icon.svg" },
        { id: "backendLanguageRabbitMQ", name: "rabbitmq", icon: "https://www.vectorlogo.zone/logos/rabbitmq/rabbitmq-icon.svg" },
        { id: "backendLanguageHadoop", name: "hadoop", icon: "https://www.vectorlogo.zone/logos/apache_hadoop/apache_hadoop-icon.svg" },
        { id: "backendLanguageOpenResty", name: "openresty", icon: "https://raw.githubusercontent.com/Edgar-Mendonca/ProfileCraft/2054198fb91ff060760931956c11d906409c0955/static/icons/openresty.svg" },
    ]; // Define Backend languages

    backendLanguages.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedBackend.push(language);
        }
    });

    return selectedBackend;
}



// Function to get selected AI/ML
function getSelectedAIML() {
    const selectedAIML = [];
    const aiMl = [
        { id: "aiMlTensorflow", name: "tensorflow", icon: "https://img.icons8.com/color/48/000000/tensorflow.png" },
        { id: "aiMlPytorch", name: "pytorch", icon: "https://img.icons8.com/fluency/48/pytorch.png" },

        { id: "aiMlPandas", name: "pandas", icon: "https://img.icons8.com/color/48/000000/pandas.png" },
        { id: "aiMlScikitLearn", name: "scikitLearn", icon: "https://raw.githubusercontent.com/Edgar-Mendonca/ProfileCraft/afdeb7b34f41113a54290e91e8ab401c34e969f1/static/icons/Scikit_learn.svg" },

    ]; // Define Backend languages

    aiMl.forEach(language => {
        const checkbox = document.getElementById(language.id);
        if (checkbox.checked) {
            selectedAIML.push(language);
        }
    });

    return selectedAIML;
}



// Function to update the live preview
function updateLivePreview() {
    const livePreview = document.getElementById("livePreview");
    const readmeContent = generateReadmeContent();
    livePreview.textContent = readmeContent;
}

// Event listener for input changes in the "About Me" section
document.getElementById("aboutMe").addEventListener("input", updateLivePreview);

// Event listener for input changes in the "Username and Full Name" sections
document.getElementById("username").addEventListener("input", updateLivePreview);
document.getElementById("fullName").addEventListener("input", updateLivePreview);

// Event listener for input changes in the "Profile Highlights" sections
document.getElementById("workingOnText").addEventListener("input", updateLivePreview); 
document.getElementById("workingOnURL").addEventListener("input", updateLivePreview);

document.getElementById("collaborateText").addEventListener("input", updateLivePreview); 
document.getElementById("collaborateURL").addEventListener("input", updateLivePreview);

document.getElementById("helpWithText").addEventListener("input", updateLivePreview); 
document.getElementById("helpWithURL").addEventListener("input", updateLivePreview);

document.getElementById("learningText").addEventListener("input", updateLivePreview); 
document.getElementById("learningURL").addEventListener("input", updateLivePreview);

document.getElementById("askMeText").addEventListener("input", updateLivePreview); 
document.getElementById("askMeURL").addEventListener("input", updateLivePreview);

document.getElementById("reachMeText").addEventListener("input", updateLivePreview); 
document.getElementById("reachMeURL").addEventListener("input", updateLivePreview);

document.getElementById("projectsText").addEventListener("input", updateLivePreview); 
document.getElementById("projectsURL").addEventListener("input", updateLivePreview);

document.getElementById("articlesText").addEventListener("input", updateLivePreview); 
document.getElementById("articlesURL").addEventListener("input", updateLivePreview);

document.getElementById("experiencesText").addEventListener("input", updateLivePreview); 
document.getElementById("experiencesURL").addEventListener("input", updateLivePreview);

document.getElementById("funFactText").addEventListener("input", updateLivePreview); 

// Event listeners for input changes in the "Connect with me" section
document.getElementById("githubUsername").addEventListener("input", updateLivePreview);
document.getElementById("youtubeUsername").addEventListener("input", updateLivePreview);

document.getElementById("twitterUsername").addEventListener("input", updateLivePreview);
document.getElementById("linkedinUsername").addEventListener("input", updateLivePreview);

document.getElementById("facebookUsername").addEventListener("input", updateLivePreview);
document.getElementById("instagramUsername").addEventListener("input", updateLivePreview);

document.getElementById("stackoverflowUsername").addEventListener("input", updateLivePreview);
document.getElementById("rssFeed").addEventListener("input", updateLivePreview);

document.getElementById("devtoUsername").addEventListener("input", updateLivePreview);
document.getElementById("mediumUsername").addEventListener("input", updateLivePreview);

document.getElementById("codepenUsername").addEventListener("input", updateLivePreview);
document.getElementById("codesandboxUsername").addEventListener("input", updateLivePreview);

document.getElementById("gitlabUsername").addEventListener("input", updateLivePreview);
document.getElementById("bitbucketUsername").addEventListener("input", updateLivePreview);

// Event listeners for input changes in the "Programming Languages" section
const programmingLanguagesCheckboxes = document.querySelectorAll(".form-check-input");
programmingLanguagesCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "Frontend Development" section
const frontendLanguageCheckboxes = document.querySelectorAll(".form-check-input");
frontendLanguageCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "Backend Development" section
const backendLanguageCheckboxes = document.querySelectorAll(".form-check-input");
backendLanguageCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});

// Event listeners for input changes in the "AI/ML" section
const aiMlCheckboxes = document.querySelectorAll(".form-check-input");
aiMlCheckboxes.forEach(checkbox => {
    checkbox.addEventListener("input", updateLivePreview);
});



// Initial live preview update
updateLivePreview();

// Function to download the README
function downloadReadme() {
    const readmeContent = generateReadmeContent();
    const blob = new Blob([readmeContent], { type: 'text/markdown' });
    const link = document.createElement('a');
    link.href = window.URL.createObjectURL(blob);
    link.download = 'README.md';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}


// Function to save form data to localStorage
function saveFormData() {
    const formData = {
        username: document.getElementById("username").value,
        fullName: document.getElementById("fullName").value,
        aboutMe: document.getElementById("aboutMe").value,
        workingOnText: document.getElementById("workingOnText").value,
        workingOnURL: document.getElementById("workingOnURL").value,
        collaborateText: document.getElementById("collaborateText").value,
        collaborateURL: document.getElementById("collaborateURL").value,
        helpWithText: document.getElementById("helpWithText").value,
        helpWithURL: document.getElementById("helpWithURL").value,
        learningText: document.getElementById("learningText").value,
        learningURL: document.getElementById("learningURL").value,
        askMeText: document.getElementById("askMeText").value,
        askMeURL: document.getElementById("askMeURL").value,
        reachMeText: document.getElementById("reachMeText").value,
        reachMeURL: document.getElementById("reachMeURL").value,
        projectsText: document.getElementById("projectsText").value,
        projectsURL: document.getElementById("projectsURL").value,
        articlesText: document.getElementById("articlesText").value,
        articlesURL: document.getElementById("articlesURL").value,
        experiencesText: document.getElementById("experiencesText").value,
        experiencesURL: document.getElementById("experiencesURL").value,
        funFactText: document.getElementById("funFactText").value,
        
        githubUsername: document.getElementById("githubUsername").value,
        youtubeUsername: document.getElementById("youtubeUsername").value,

        twitterUsername: document.getElementById("twitterUsername").value,
        linkedinUsername: document.getElementById("linkedinUsername").value,

        facebookUsername: document.getElementById("facebookUsername").value,
        instagramUsername: document.getElementById("instagramUsername").value,

        stackoverflowUsername: document.getElementById("stackoverflowUsername").value,
        rssFeed: document.getElementById("rssFeed").value,

        devtoUsername: document.getElementById("devtoUsername").value,
        mediumUsername: document.getElementById("mediumUsername").value,

        codepenUsername: document.getElementById("codepenUsername").value,
        codesandboxUsername: document.getElementById("codesandboxUsername").value,

        gitlabUsername: document.getElementById("gitlabUsername").value,
        bitbucketUsername: document.getElementById("bitbucketUsername").value,

        // Include Programming Languages
        selectedLanguages: getSelectedLanguages()

    };

    localStorage.setItem('formData', JSON.stringify(formData));
}

// Function to load form data from localStorage
function loadFormData() {
    const savedFormData = localStorage.getItem('formData');

    if (savedFormData) {
        const formData = JSON.parse(savedFormData);

        document.getElementById("username").value = formData.username || '';
        document.getElementById("fullName").value = formData.fullName || '';
        document.getElementById("aboutMe").value = formData.aboutMe || '';
        document.getElementById("workingOnText").value = formData.workingOnText || '';
        document.getElementById("workingOnURL").value = formData.workingOnURL || '';
        document.getElementById("collaborateText").value = formData.collaborateText || '';
        document.getElementById("collaborateURL").value = formData.collaborateURL || '';
        document.getElementById("helpWithText").value = formData.helpWithText || '';
        document.getElementById("helpWithURL").value = formData.helpWithURL || '';
        document.getElementById("learningText").value = formData.learningText || '';
        document.getElementById("learningURL").value = formData.learningURL || '';
        document.getElementById("askMeText").value = formData.askMeText || '';
        document.getElementById("askMeURL").value = formData.askMeURL || '';
        document.getElementById("reachMeText").value = formData.reachMeText || '';
        document.getElementById("reachMeURL").value = formData.reachMeURL || '';
        document.getElementById("projectsText").value = formData.projectsText || '';
        document.getElementById("projectsURL").value = formData.projectsURL || '';
        document.getElementById("articlesText").value = formData.articlesText || '';
        document.getElementById("articlesURL").value = formData.articlesURL || '';
        document.getElementById("experiencesText").value = formData.experiencesText || '';
        document.getElementById("experiencesURL").value = formData.experiencesURL || '';
        document.getElementById("funFactText").value = formData.funFactText || '';

        document.getElementById("githubUsername").value = formData.githubUsername || '';
        document.getElementById("youtubeUsername").value = formData.youtubeUsername || '';
        document.getElementById("twitterUsername").value = formData.twitterUsername || '';
        document.getElementById("linkedinUsername").value = formData.linkedinUsername || '';
        document.getElementById("facebookUsername").value = formData.facebookUsername || '';
        document.getElementById("instagramUsername").value = formData.instagramUsername || '';
        document.getElementById("stackoverflowUsername").value = formData.stackoverflowUsername || '';
        document.getElementById("rssFeed").value = formData.rssFeed || '';
        document.getElementById("devtoUsername").value = formData.devtoUsername || '';
        document.getElementById("mediumUsername").value = formData.mediumUsername || '';
        document.getElementById("codepenUsername").value = formData.codepenUsername || '';
        document.getElementById("codesandboxUsername").value = formData.codesandboxUsername || '';
        document.getElementById("gitlabUsername").value = formData.gitlabUsername || '';
        document.getElementById("bitbucketUsername").value = formData.bitbucketUsername || '';

        // Load selected programming languages
        const selectedLanguages = formData.selectedLanguages || [];
        selectedLanguages.forEach(language => {
            const checkbox = document.getElementById(language.id);
            if (checkbox) {
                checkbox.checked = true;
            }
        });

    }
}

// Initial live preview update
updateLivePreview();
// Load form data when the page is loaded
loadFormData();
