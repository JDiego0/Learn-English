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
                                        <li><strong>Semana 1-2:</strong> Aprender las <a href="https://www.oxfordlearnersdictionaries.com/wordlists/oxford-3000-5000" target="_blank" rel="noopener noreferrer">1000 palabras más usadas en inglés (Oxford 3000)</a>. Usar <a href="https://apps.ankiweb.net/" target="_blank" rel="noopener noreferrer">Anki</a> para repaso diario 15-20 min.</li>
                                        <li><strong>Semana 3:</strong> Expresiones laborales simples: "I fixed a bug", "I wrote this function". Practicar 5-10 min diarios describiendo tu trabajo.</li>
                                        <li><strong>Semana 4:</strong> Videos básicos: <a href="https://www.bbc.co.uk/learningenglish" target="_blank" rel="noopener noreferrer">BBC Learning English</a> – English at Work, <a href="https://www.youtube.com/results?search_query=english+for+developers" target="_blank" rel="noopener noreferrer">English for Developers</a>. Escucha y repite frases clave.</li>
                                        <li><strong>Semana 5:</strong> Practicar pronunciación con <a href="https://youglish.com/" target="_blank" rel="noopener noreferrer">YouGlish</a>, escuchar palabras en contexto real.</li>
                                        <li><strong>Semana 6:</strong> Conversación guiada: describir tu día laboral y tu código en inglés, 10 min diarios.</li>
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
                                        <li><strong>Semana 7:</strong> Explicaciones cortas (30 seg): "First, the function receives input…". Practica grabándote y escuchando tu pronunciación.</li>
                                        <li><strong>Semana 8:</strong> Aprender 10 verbos técnicos por semana: run, return, execute, call, fetch, handle. Usar Anki para memorizar.</li>
                                        <li><strong>Semana 9:</strong> Shadowing: repetir explicaciones de código de <a href="https://www.youtube.com/c/Freecodecamp" target="_blank" rel="noopener noreferrer">FreeCodeCamp</a> y <a href="https://www.youtube.com/c/TraversyMedia" target="_blank" rel="noopener noreferrer">Traversy Media</a> con subtítulos.</li>
                                        <li><strong>Semana 10:</strong> Explicar funciones propias: grábate explicando tus programas (3 veces por semana).</li>
                                        <li><strong>Semana 11:</strong> Pronunciación: usar <a href="https://elsaspeak.com/" target="_blank" rel="noopener noreferrer">Elsa Speak</a> en modo gratuito.</li>
                                        <li><strong>Semana 12:</strong> Revisar con <a href="https://translate.google.com/" target="_blank" rel="noopener noreferrer">Google Translate / DeepL</a> ejemplos de frases técnicas y su pronunciación.</li>
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
                                        <li><strong>Semana 13-14:</strong> Podcasts y videos técnicos 30 min/día: <a href="https://www.codenewbie.org/podcast" target="_blank" rel="noopener noreferrer">CodeNewbie</a>, <a href="https://syntax.fm/" target="_blank" rel="noopener noreferrer">Syntax.fm</a>. Tomar notas de vocabulario nuevo.</li>
                                        <li><strong>Semana 15:</strong> Shadowing avanzado: repetir frases técnicas y expresiones de los podcasts.</li>
                                        <li><strong>Semana 16:</strong> Crear glosario personal de términos técnicos y ejemplos de uso diario.</li>
                                        <li><strong>Semana 17:</strong> Resumir oralmente cada podcast/video escuchado.</li>
                                        <li><strong>Semana 18:</strong> Leer artículos técnicos usando <a href="https://www.readlang.com/" target="_blank" rel="noopener noreferrer">Readlang</a> o <a href="https://www.lingq.com/" target="_blank" rel="noopener noreferrer">LingQ</a> para traducción instantánea.</li>
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
                                        <li><strong>Semana 20:</strong> Presentar proyectos propios (2–3 min) cada semana.</li>
                                        <li><strong>Semana 21:</strong> Intercambios de voz con <a href="https://www.tandem.net/" target="_blank" rel="noopener noreferrer">Tandem</a> o <a href="https://www.hellotalk.com/" target="_blank" rel="noopener noreferrer">HelloTalk</a> mínimo 2 veces por semana.</li>
                                        <li><strong>Semana 22:</strong> Evaluar fluidez con <a href="https://speakenglish.ai/" target="_blank" rel="noopener noreferrer">SpeakEnglish.ai</a>.</li>
                                        <li><strong>Semana 23:</strong> Revisar textos y correos técnicos con <a href="https://www.grammarly.com/" target="_blank" rel="noopener noreferrer">Grammarly</a> gratuito.</li>
                                        <li><strong>Semana 24:</strong> Preparación para consolidación: revisa pronunciación y vocabulario aprendido.</li>
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
                                    <strong>memorizar palabras frecuentes, shadowing, roleplay, grabaciones, podcasts y lectura técnica</strong>. 
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
