import { useState } from 'react';
import { BookOpen, Video, Headphones, FileText, CheckCircle, Lock, Play, Download, Award } from 'lucide-react';
import './English.css';

const English = () => {
    const [selectedLevel, setSelectedLevel] = useState('A1');
    const [selectedModule, setSelectedModule] = useState(null);
    const [completedLessons, setCompletedLessons] = useState({});
    const [activeTab, setActiveTab] = useState('content');

    const courseStructure = {
        A1: {
            name: "Principiante (A1)",
            description: "Fundamentos del inglés",
            modules: [
                {
                    id: 'a1-1',
                    title: "Módulo 1: Greetings & Introductions",
                    duration: "2 semanas",
                    lessons: [
                        {
                            id: 'a1-1-1',
                            title: "Hello! - Saludos básicos",
                            content: {
                                vocabulary: ["Hello", "Hi", "Good morning", "Good afternoon", "Good evening", "Good night", "Goodbye", "Bye", "See you later"],
                                grammar: "Pronombres personales: I, You, He, She, It, We, They",
                                dialogues: [
                                    {
                                        speaker: "Person A",
                                        text: "Hello! My name is Maria. What's your name?",
                                        translation: "¡Hola! Mi nombre es María. ¿Cuál es tu nombre?"
                                    },
                                    {
                                        speaker: "Person B",
                                        text: "Hi Maria! I'm John. Nice to meet you.",
                                        translation: "¡Hola María! Soy John. Encantado de conocerte."
                                    }
                                ],
                                exercises: [
                                    {
                                        type: "fill",
                                        question: "Complete: Hello! My ___ is Anna.",
                                        answer: "name"
                                    },
                                    {
                                        type: "translate",
                                        question: "Traduce: Good morning",
                                        answer: "Buenos días"
                                    }
                                ]
                            },
                            audio: "Pronunciación de saludos disponible",
                            video: "Video tutorial: Cómo presentarte en inglés"
                        },
                        {
                            id: 'a1-1-2',
                            title: "Nice to meet you - Presentaciones",
                            content: {
                                vocabulary: ["My name is...", "I am from...", "Nice to meet you", "How are you?", "I'm fine", "Thank you"],
                                grammar: "Verbo TO BE (presente simple): I am, You are, He/She/It is",
                                dialogues: [
                                    {
                                        speaker: "Sarah",
                                        text: "Hi! I am Sarah. I am from Spain.",
                                        translation: "¡Hola! Soy Sarah. Soy de España."
                                    },
                                    {
                                        speaker: "Tom",
                                        text: "Nice to meet you, Sarah! I am Tom. I am from England.",
                                        translation: "¡Encantado de conocerte, Sarah! Soy Tom. Soy de Inglaterra."
                                    }
                                ],
                                exercises: [
                                    {
                                        type: "complete",
                                        question: "I ___ from Mexico.",
                                        answer: "am"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'a1-2',
                    title: "Módulo 2: Numbers & Colors",
                    duration: "2 semanas",
                    lessons: [
                        {
                            id: 'a1-2-1',
                            title: "Numbers 1-100",
                            content: {
                                vocabulary: ["one", "two", "three", "four", "five", "ten", "twenty", "fifty", "hundred"],
                                grammar: "Números cardinales y ordinales básicos",
                                exercises: [
                                    {
                                        type: "write",
                                        question: "Escribe en inglés: 25",
                                        answer: "twenty-five"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'a1-3',
                    title: "Módulo 3: Family & Friends",
                    duration: "2 semanas",
                    lessons: []
                },
                {
                    id: 'a1-4',
                    title: "Módulo 4: Daily Routines",
                    duration: "3 semanas",
                    lessons: []
                }
            ],
            evaluation: {
                midterm: "Examen A1 - Unidades 1-2",
                final: "Examen Final A1 - Todas las unidades"
            }
        },
        A2: {
            name: "Elemental (A2)",
            description: "Comunicación básica cotidiana",
            modules: [
                {
                    id: 'a2-1',
                    title: "Módulo 1: Present Simple & Continuous",
                    duration: "3 semanas",
                    lessons: [
                        {
                            id: 'a2-1-1',
                            title: "Present Simple - Habits & Routines",
                            content: {
                                vocabulary: ["always", "usually", "often", "sometimes", "never", "every day", "on Mondays"],
                                grammar: "Present Simple: I work, You work, He/She works. Forma negativa e interrogativa",
                                dialogues: [
                                    {
                                        speaker: "Interview",
                                        text: "What do you do every day?",
                                        translation: "¿Qué haces todos los días?"
                                    },
                                    {
                                        speaker: "Answer",
                                        text: "I wake up at 7 AM. I have breakfast and go to work.",
                                        translation: "Me despierto a las 7 AM. Desayuno y voy al trabajo."
                                    }
                                ],
                                exercises: [
                                    {
                                        type: "conjugate",
                                        question: "She ___ (work) in a hospital.",
                                        answer: "works"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'a2-2',
                    title: "Módulo 2: Past Simple",
                    duration: "3 semanas",
                    lessons: []
                },
                {
                    id: 'a2-3',
                    title: "Módulo 3: Going to - Future",
                    duration: "2 semanas",
                    lessons: []
                },
                {
                    id: 'a2-4',
                    title: "Módulo 4: Shopping & Eating Out",
                    duration: "3 semanas",
                    lessons: []
                }
            ],
            evaluation: {
                midterm: "Examen A2 - Unidades 1-2",
                final: "Examen Final A2"
            }
        },
        B1: {
            name: "Intermedio (B1)",
            description: "Independencia comunicativa",
            modules: [
                {
                    id: 'b1-1',
                    title: "Módulo 1: Present Perfect",
                    duration: "3 semanas",
                    lessons: [
                        {
                            id: 'b1-1-1',
                            title: "Present Perfect - Experience",
                            content: {
                                vocabulary: ["ever", "never", "already", "yet", "just", "recently", "so far"],
                                grammar: "Present Perfect: have/has + past participle. Diferencia con Past Simple",
                                dialogues: [
                                    {
                                        speaker: "Friend 1",
                                        text: "Have you ever been to Paris?",
                                        translation: "¿Has estado alguna vez en París?"
                                    },
                                    {
                                        speaker: "Friend 2",
                                        text: "Yes, I have been there twice. I visited the Eiffel Tower.",
                                        translation: "Sí, he estado allí dos veces. Visité la Torre Eiffel."
                                    }
                                ],
                                exercises: [
                                    {
                                        type: "complete",
                                        question: "I ___ (visit) London three times.",
                                        answer: "have visited"
                                    }
                                ]
                            }
                        }
                    ]
                },
                {
                    id: 'b1-2',
                    title: "Módulo 2: Modal Verbs",
                    duration: "3 semanas",
                    lessons: []
                },
                {
                    id: 'b1-3',
                    title: "Módulo 3: Conditionals (First & Second)",
                    duration: "3 semanas",
                    lessons: []
                },
                {
                    id: 'b1-4',
                    title: "Módulo 4: Passive Voice",
                    duration: "2 semanas",
                    lessons: []
                }
            ],
            evaluation: {
                midterm: "Examen B1 - Unidades 1-2",
                final: "Examen Final B1 - Certificación"
            }
        }
    };

    const toggleLesson = (lessonId) => {
        setCompletedLessons(prev => ({
            ...prev,
            [lessonId]: !prev[lessonId]
        }));
    };

    const currentLevel = courseStructure[selectedLevel];

    return (
        <div className="english-course">
            <div className="course-container">
                {/* Header */}
                <div className="course-header">
                    <div className="header-content">
                        <BookOpen className="header-icon" />
                        <div>
                            <h1 className="course-title">Curso Completo de Inglés</h1>
                            <p className="course-subtitle">De A1 a B1 - Materiales Incluidos</p>
                            <p className="course-subtitle">By Juan Diego García Chavarriaga</p>
                        </div>
                    </div>

                    {/* Level Selector */}
                    <div className="level-selector">
                        {Object.keys(courseStructure).map(level => (
                            <button
                                key={level}
                                onClick={() => {
                                    setSelectedLevel(level);
                                    setSelectedModule(null);
                                }}
                                className={`level-button ${selectedLevel === level ? 'level-button-active' : ''}`}
                            >
                                {level} - {courseStructure[level].name}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="course-layout">
                    {/* Sidebar - Modules */}
                    <div className="sidebar">
                        <div className="modules-panel">
                            <h2 className="level-title">
                                {currentLevel.name}
                            </h2>
                            <p className="level-description">{currentLevel.description}</p>

                            <div className="modules-list">
                                {currentLevel.modules.map((module, idx) => (
                                    <div key={module.id} className="module-item">
                                        <button
                                            onClick={() => setSelectedModule(module)}
                                            className={`module-button ${selectedModule?.id === module.id ? 'module-button-active' : ''}`}
                                        >
                                            <div className="module-content">
                                                <div className="module-number">
                                                    {idx + 1}
                                                </div>
                                                <div className="module-info">
                                                    <h3 className="module-title">
                                                        {module.title}
                                                    </h3>
                                                    <p className="module-duration">{module.duration}</p>
                                                    <div className="module-stats">
                                                        <span className="lessons-count">
                                                            {module.lessons.length} lecciones
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>
                                        </button>
                                    </div>
                                ))}

                                {/* Evaluation Section */}
                                <div className="evaluation-section">
                                    <h4 className="evaluation-title">
                                        <Award className="evaluation-icon" />
                                        Evaluaciones
                                    </h4>
                                    <ul className="evaluation-list">
                                        <li>• {currentLevel.evaluation.midterm}</li>
                                        <li>• {currentLevel.evaluation.final}</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Main Content Area */}
                    <div className="main-content">
                        {selectedModule ? (
                            <div className="module-detail">
                                <h2 className="module-detail-title">
                                    {selectedModule.title}
                                </h2>
                                <p className="module-detail-duration">Duración: {selectedModule.duration}</p>

                                {/* Tabs */}
                                <div className="tabs-container">
                                    <div className="tabs">
                                        <button
                                            onClick={() => setActiveTab('content')}
                                            className={`tab-button ${activeTab === 'content' ? 'tab-button-active' : ''}`}
                                        >
                                            Contenido
                                        </button>
                                        <button
                                            onClick={() => setActiveTab('materials')}
                                            className={`tab-button ${activeTab === 'materials' ? 'tab-button-active' : ''}`}
                                        >
                                            Materiales
                                        </button>
                                    </div>
                                </div>

                                {activeTab === 'content' && (
                                    <div className="lessons-container">
                                        {selectedModule.lessons.length > 0 ? (
                                            selectedModule.lessons.map((lesson) => (
                                                <div key={lesson.id} className="lesson-card">
                                                    <div className="lesson-header">
                                                        <div className="lesson-info">
                                                            <h3 className="lesson-title">
                                                                {lesson.title}
                                                            </h3>
                                                        </div>
                                                        <button
                                                            onClick={() => toggleLesson(lesson.id)}
                                                            className="completion-toggle"
                                                        >
                                                            {completedLessons[lesson.id] ? (
                                                                <CheckCircle className="completed-icon" />
                                                            ) : (
                                                                <div className="incomplete-circle" />
                                                            )}
                                                        </button>
                                                    </div>

                                                    {/* Vocabulary */}
                                                    {lesson.content.vocabulary && (
                                                        <div className="vocabulary-section">
                                                            <h4 className="section-title vocabulary-title">📚 Vocabulario:</h4>
                                                            <div className="vocabulary-list">
                                                                {lesson.content.vocabulary.map((word, i) => (
                                                                    <span key={i} className="vocabulary-word">
                                                                        {word}
                                                                    </span>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Grammar */}
                                                    {lesson.content.grammar && (
                                                        <div className="grammar-section">
                                                            <h4 className="section-title grammar-title">📖 Gramática:</h4>
                                                            <p className="grammar-content">
                                                                {lesson.content.grammar}
                                                            </p>
                                                        </div>
                                                    )}

                                                    {/* Dialogues */}
                                                    {lesson.content.dialogues && (
                                                        <div className="dialogues-section">
                                                            <h4 className="section-title dialogues-title">💬 Diálogos:</h4>
                                                            <div className="dialogues-container">
                                                                {lesson.content.dialogues.map((dialogue, i) => (
                                                                    <div key={i} className="dialogue">
                                                                        <p className="dialogue-speaker">{dialogue.speaker}:</p>
                                                                        <p className="dialogue-text">"{dialogue.text}"</p>
                                                                        <p className="dialogue-translation">{dialogue.translation}</p>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Exercises */}
                                                    {lesson.content.exercises && (
                                                        <div className="exercises-section">
                                                            <h4 className="section-title exercises-title">✏️ Ejercicios:</h4>
                                                            <div className="exercises-container">
                                                                {lesson.content.exercises.map((ex, i) => (
                                                                    <div key={i} className="exercise">
                                                                        <p className="exercise-question">{i + 1}. {ex.question}</p>
                                                                        <details className="exercise-answer">
                                                                            <summary className="answer-summary">Ver respuesta</summary>
                                                                            <p className="correct-answer">✓ {ex.answer}</p>
                                                                        </details>
                                                                    </div>
                                                                ))}
                                                            </div>
                                                        </div>
                                                    )}

                                                    {/* Multimedia */}
                                                    <div className="multimedia-grid">
                                                        {lesson.audio && (
                                                            <div className="media-item audio-item">
                                                                <Headphones className="media-icon audio-icon" />
                                                                <span className="media-text">{lesson.audio}</span>
                                                            </div>
                                                        )}
                                                        {lesson.video && (
                                                            <div className="media-item video-item">
                                                                <Video className="media-icon video-icon" />
                                                                <span className="media-text">{lesson.video}</span>
                                                            </div>
                                                        )}
                                                    </div>
                                                </div>
                                            ))
                                        ) : (
                                            <div className="empty-lessons">
                                                <Lock className="empty-icon" />
                                                <p>Contenido en desarrollo</p>
                                            </div>
                                        )}
                                    </div>
                                )}

                                {activeTab === 'materials' && (
                                    <div className="materials-container">
                                        <div className="materials-grid">
                                            {/* Audio Resources */}
                                            <div className="material-card audio-resources">
                                                <div className="material-header">
                                                    <Headphones className="material-icon audio-material-icon" />
                                                    <h3 className="material-title">Recursos de Audio</h3>
                                                </div>
                                                <ul className="material-list">
                                                    <li className="material-item">
                                                        <Play className="item-icon audio-item-icon" />
                                                        <span>Pronunciación de vocabulario</span>
                                                    </li>
                                                    <li className="material-item">
                                                        <Play className="item-icon audio-item-icon" />
                                                        <span>Diálogos completos</span>
                                                    </li>
                                                    <li className="material-item">
                                                        <Play className="item-icon audio-item-icon" />
                                                        <span>Ejercicios de comprensión auditiva</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Video Resources */}
                                            <div className="material-card video-resources">
                                                <div className="material-header">
                                                    <Video className="material-icon video-material-icon" />
                                                    <h3 className="material-title">Videos Educativos</h3>
                                                </div>
                                                <ul className="material-list">
                                                    <li className="material-item">
                                                        <Play className="item-icon video-item-icon" />
                                                        <span>Explicaciones gramaticales</span>
                                                    </li>
                                                    <li className="material-item">
                                                        <Play className="item-icon video-item-icon" />
                                                        <span>Situaciones cotidianas</span>
                                                    </li>
                                                    <li className="material-item">
                                                        <Play className="item-icon video-item-icon" />
                                                        <span>Cultura y expresiones</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Written Materials */}
                                            <div className="material-card written-resources">
                                                <div className="material-header">
                                                    <FileText className="material-icon written-material-icon" />
                                                    <h3 className="material-title">Material Escrito</h3>
                                                </div>
                                                <ul className="material-list">
                                                    <li className="material-item">
                                                        <Download className="item-icon written-item-icon" />
                                                        <span>Guía gramatical PDF</span>
                                                    </li>
                                                    <li className="material-item">
                                                        <Download className="item-icon written-item-icon" />
                                                        <span>Listas de vocabulario</span>
                                                    </li>
                                                    <li className="material-item">
                                                        <Download className="item-icon written-item-icon" />
                                                        <span>Ejercicios adicionales</span>
                                                    </li>
                                                </ul>
                                            </div>

                                            {/* Evaluations */}
                                            <div className="material-card evaluation-resources">
                                                <div className="material-header">
                                                    <Award className="material-icon evaluation-material-icon" />
                                                    <h3 className="material-title">Evaluaciones</h3>
                                                </div>
                                                <ul className="material-list">
                                                    <li className="material-item">
                                                        <CheckCircle className="item-icon evaluation-item-icon" />
                                                        <span>Quiz después de cada lección</span>
                                                    </li>
                                                    <li className="material-item">
                                                        <CheckCircle className="item-icon evaluation-item-icon" />
                                                        <span>Examen parcial del módulo</span>
                                                    </li>
                                                    <li className="material-item">
                                                        <CheckCircle className="item-icon evaluation-item-icon" />
                                                        <span>Examen final certificado</span>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </div>
                        ) : (
                            <div className="welcome-panel">
                                <BookOpen className="welcome-icon" />
                                <h3 className="welcome-title">
                                    Bienvenido al Curso de Inglés
                                </h3>
                                <p className="welcome-text">
                                    Selecciona un módulo de la izquierda para comenzar tu aprendizaje
                                </p>
                                <div className="features-grid">
                                    <div className="feature-card">
                                        <Video className="feature-icon video-feature-icon" />
                                        <p className="feature-text">Videos</p>
                                    </div>
                                    <div className="feature-card">
                                        <Headphones className="feature-icon audio-feature-icon" />
                                        <p className="feature-text">Audios</p>
                                    </div>
                                    <div className="feature-card">
                                        <FileText className="feature-icon text-feature-icon" />
                                        <p className="feature-text">Textos</p>
                                    </div>
                                    <div className="feature-card">
                                        <Award className="feature-icon exam-feature-icon" />
                                        <p className="feature-text">Exámenes</p>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                </div>

                {/* Progress Summary */}
                <div className="progress-summary">
                    <h3 className="progress-title">Tu Progreso</h3>
                    <div className="progress-grid">
                        <div className="progress-card lessons-progress">
                            <p className="progress-label">Lecciones Completadas</p>
                            <p className="progress-value">
                                {Object.keys(completedLessons).filter(k => completedLessons[k]).length}
                            </p>
                        </div>
                        <div className="progress-card level-progress">
                            <p className="progress-label">Nivel Actual</p>
                            <p className="progress-value">{selectedLevel}</p>
                        </div>
                        <div className="progress-card hours-progress">
                            <p className="progress-label">Horas de Estudio</p>
                            <p className="progress-value">
                                {Object.keys(completedLessons).filter(k => completedLessons[k]).length * 2}h
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default English;