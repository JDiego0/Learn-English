import { useState } from "react";
import "./English.css";
import { BookOpen, Code2, Rocket, Brain, Target, Globe } from "lucide-react";

const English = () => {
    const [open, setOpen] = useState(null);
    const toggle = (i) => setOpen(open === i ? null : i);

    return (
        <div className="plan-container">
            <div className="plan-card">
                <h1 className="plan-title">
                    <BookOpen className="icon" />
                    Plan Integral de Inglés Técnico para Programadores
                </h1>
                <p className="plan-subtitle">
                    Programa de 6 meses (24 semanas) para alcanzar fluidez funcional en inglés técnico y laboral.
                    Enfoque: explicar código, entender conversaciones de oficina, reuniones y entrevistas.
                </p>

                <div className="accordion">
                    {[
                        {
                            icon: <Target className="icon-section" />,
                            title: "Fase 1: Fundamentos del Inglés y Vocabulario Base (Semanas 1-6)",
                            content: (
                                <>
                                    <p><strong>Nivel:</strong> A1 → A2</p>
                                    <p><strong>Objetivo:</strong> Construir base de comprensión y vocabulario para comunicarse sobre tareas diarias y código simple.</p>
                                    <ul>
                                        <li><strong>Semana 1-2:</strong> Aprender las <a href="https://www.oxfordlearnersdictionaries.com/wordlists/oxford-3000-5000" target="_blank" rel="noopener noreferrer">1000 palabras más usadas en inglés (Oxford 3000)</a>. Usar <a href="https://apps.ankiweb.net/" target="_blank" rel="noopener noreferrer">Anki</a> 15-20 min diarios. <em>Tip:</em> Siempre usar las palabras en frases completas relacionadas con tu trabajo.</li>
                                        <li><strong>Semana 3:</strong> Expresiones laborales simples: "I fixed a bug", "I wrote this function". Practicar 5-10 min diarios describiendo tu trabajo en voz alta. <em>Tip:</em> Graba y escucha tu pronunciación.</li>
                                        <li><strong>Semana 4:</strong> Videos básicos: <a href="https://www.bbc.co.uk/learningenglish" target="_blank" rel="noopener noreferrer">BBC Learning English</a> – English at Work, <a href="https://www.youtube.com/results?search_query=english+for+developers" target="_blank" rel="noopener noreferrer">English for Developers</a>. Repite frases clave y escribe ejemplos propios.</li>
                                        <li><strong>Semana 5:</strong> Pronunciación y contexto: usar <a href="https://youglish.com/" target="_blank" rel="noopener noreferrer">YouGlish</a> para escuchar palabras en contexto real, repetir 5 veces cada frase.</li>
                                        <li><strong>Semana 6:</strong> Conversación guiada: describe tu día laboral y tu código en inglés 10 min diarios. <em>Tip:</em> Corrige errores usando notas o tu glosario personal.</li>
                                    </ul>
                                </>
                            ),
                        },
                        {
                            icon: <Brain className="icon-section" />,
                            title: "Fase 2: Explicación de Código y Procesos (Semanas 7-12)",
                            content: (
                                <>
                                    <p><strong>Nivel:</strong> A2 → B1</p>
                                    <p><strong>Objetivo:</strong> Aprender a explicar la lógica del código y procesos de manera clara.</p>
                                    <ul>
                                        <li><strong>Semana 7:</strong> Explicaciones cortas (30 seg): "First, the function receives input…". Graba y escucha tu pronunciación. <em>Tip:</em> Corrige entonación y pausas para claridad.</li>
                                        <li><strong>Semana 8:</strong> Aprender 10 verbos técnicos por semana: run, return, execute, call, fetch, handle. Usar Anki para repaso diario, aplicando los verbos en frases propias.</li>
                                        <li><strong>Semana 9:</strong> Shadowing: repetir explicaciones de código de <a href="https://www.youtube.com/c/Freecodecamp" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a> y <a href="https://www.youtube.com/c/TraversyMedia" target="_blank" rel="noopener noreferrer">Traversy Media</a> con subtítulos. <em>Tip:</em> Imita ritmo y pronunciación.</li>
                                        <li><strong>Semana 10:</strong> Explica tus funciones propias: grábate explicando tus programas 3 veces por semana, revisa errores y vocabulario.</li>
                                        <li><strong>Semana 11:</strong> Pronunciación: usa <a href="https://elsaspeak.com/" target="_blank" rel="noopener noreferrer">Elsa Speak</a> gratuito, enfócate en palabras técnicas difíciles.</li>
                                        <li><strong>Semana 12:</strong> Revisión y práctica: usa <a href="https://translate.google.com/" target="_blank" rel="noopener noreferrer">Google Translate / DeepL</a> para escuchar ejemplos de frases técnicas y corregir tu pronunciación.</li>
                                    </ul>
                                </>
                            ),
                        },
                        {
                            icon: <Code2 className="icon-section" />,
                            title: "Fase 3: Comprensión Auditiva Técnica y Vocabulario Avanzado (Semanas 13-18)",
                            content: (
                                <>
                                    <p><strong>Nivel:</strong> B1 intermedio</p>
                                    <p><strong>Objetivo:</strong> Comprender conversaciones técnicas y documentación real en inglés.</p>
                                    <ul>
                                        <li><strong>Semana 13-14:</strong> Podcasts y videos técnicos 30 min/día: <a href="https://www.codenewbie.org/podcast" target="_blank" rel="noopener noreferrer">CodeNewbie</a>, <a href="https://syntax.fm/" target="_blank" rel="noopener noreferrer">Syntax.fm</a>. Anotar nuevo vocabulario y usar en frases propias.</li>
                                        <li><strong>Semana 15:</strong> Shadowing avanzado: repetir frases técnicas y expresiones de los podcasts, enfócate en fluidez.</li>
                                        <li><strong>Semana 16:</strong> Glosario personal: agrega términos técnicos y ejemplos de uso diario.</li>
                                        <li><strong>Semana 17:</strong> Resumir oralmente cada podcast/video escuchado para practicar comprensión y expresión.</li>
                                        <li><strong>Semana 18:</strong> Leer artículos técnicos usando <a href="https://www.readlang.com/" target="_blank" rel="noopener noreferrer">Readlang</a> o <a href="https://www.lingq.com/" target="_blank" rel="noopener noreferrer">LingQ</a>, traduciendo solo palabras desconocidas.</li>
                                    </ul>
                                </>
                            ),
                        },
                        {
                            icon: <Rocket className="icon-section" />,
                            title: "Fase 4: Comunicación en Reuniones y Exposiciones Técnicas (Semanas 19-24)",
                            content: (
                                <>
                                    <p><strong>Nivel:</strong> B1 → B2</p>
                                    <p><strong>Objetivo:</strong> Participar activamente en reuniones, explicar proyectos y comunicarse con confianza.</p>
                                    <ul>
                                        <li><strong>Semana 19:</strong> Practicar estructuras para reuniones: "Can you share your screen?", "Let me walk you through the code".</li>
                                        <li><strong>Semana 20:</strong> Presentar proyectos propios (2–3 min) cada semana, usar frases aprendidas y nuevo vocabulario.</li>
                                        <li><strong>Semana 21:</strong> Intercambios de voz con <a href="https://www.tandem.net/" target="_blank" rel="noopener noreferrer">Tandem</a> o <a href="https://www.hellotalk.com/" target="_blank" rel="noopener noreferrer">HelloTalk</a>, mínimo 2 veces por semana. Practica hablar sin traducir.</li>
                                        <li><strong>Semana 22:</strong> Evaluar fluidez con <a href="https://speakenglish.ai/" target="_blank" rel="noopener noreferrer">SpeakEnglish.ai</a>. Repite y corrige errores.</li>
                                        <li><strong>Semana 23:</strong> Revisar textos y correos técnicos con <a href="https://www.grammarly.com/" target="_blank" rel="noopener noreferrer">Grammarly</a> gratuito. Aprender estructuras correctas.</li>
                                        <li><strong>Semana 24:</strong> Consolidación: repasa pronunciación, vocabulario, y practica exposición final.</li>
                                    </ul>
                                </>
                            ),
                        },
                        {
                            icon: <Globe className="icon-section" />,
                            title: "Por qué este plan es efectivo",
                            content: (
                                <p>
                                    Este plan combina métodos comprobados: 
                                    <strong>memorizar palabras frecuentes en frases, shadowing, roleplay, grabaciones, podcasts y lectura técnica</strong>. 
                                    Permite comunicarte en inglés técnico sin necesidad de perfección nativa, logrando fluidez funcional para programadores.
                                </p>
                            ),
                        },
                    ].map((item, i) => (
                        <div key={i} className="accordion-item">
                            <button onClick={() => toggle(i)} className="accordion-header">
                                <div className="accordion-title">
                                    {item.icon}
                                    {item.title}
                                </div>
                                <span className="accordion-symbol">{open === i ? "−" : "+"}</span>
                            </button>
                            {open === i && <div className="accordion-content">{item.content}</div>}
                        </div>
                    ))}
                </div>

                {/* Firma al final */}
                <div className="plan-footer">
                    <p>Plan desarrollado por <strong>Juan Diego Garcia Chavarriaga</strong></p>
                </div>
            </div>
        </div>
    );
};

export default English;
