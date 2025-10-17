import React, { useState, useEffect } from 'react';
import { CheckCircle, Circle, Award, BookOpen, ChevronRight, ChevronLeft, RotateCcw } from 'lucide-react';

const VehicleMaintenanceLMS = () => {
  const [currentModule, setCurrentModule] = useState(0);
  const [currentSection, setCurrentSection] = useState('content');
  const [progress, setProgress] = useState({});
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);

  const modules = [
    {
      id: 1,
      title: "Purpose of Routine Maintenance",
      icon: "🔧",
      content: {
        intro: "Routine maintenance is essential for keeping vehicles safe, reliable, and efficient. Let's explore why it matters and how to do it properly.",
        topics: [
          {
            title: "Purpose of Routine Maintenance",
            content: "Routine maintenance prevents breakdowns, extends vehicle life, maintains safety standards, and ensures optimal performance. Regular servicing identifies potential issues before they become major problems."
          },
          {
            title: "Time Scales & Documentation",
            content: "Observing time scales ensures customer satisfaction and helps manage workflow. Key documents include job cards for tracking work, stores records for parts management, and inspection checklists for systematic checks."
          },
          {
            title: "Sources of Information",
            content: "Technicians rely on online resources, technical manuals, service bulletins, and MOT regulations. The Road Traffic Act and Highway Code provide legal frameworks for vehicle maintenance and use."
          },
          {
            title: "Inspection Methods",
            content: "Inspections use aural (listening for unusual sounds), visual (checking for damage/leaks), and functional assessments (testing systems). These identify malfunctions, wear, corrosion, and water ingress."
          }
        ]
      },
      quiz: [
        {
          question: "What is the primary purpose of routine maintenance?",
          options: [
            "To make vehicles look better",
            "To prevent breakdowns and ensure safety",
            "To increase fuel consumption",
            "To void warranties"
          ],
          correct: 1
        },
        {
          question: "Which document is used to track work performed on a vehicle?",
          options: ["Insurance certificate", "Job card", "Owner's manual", "Registration document"],
          correct: 1
        },
        {
          question: "What type of inspection involves listening for unusual sounds?",
          options: ["Visual inspection", "Functional assessment", "Aural inspection", "Digital inspection"],
          correct: 2
        }
      ]
    },
    {
      id: 2,
      title: "Petrol & Diesel Engines",
      icon: "⚙️",
      content: {
        intro: "Understanding how engines work is fundamental to vehicle maintenance. We'll cover both petrol and diesel engine principles.",
        topics: [
          {
            title: "Four-Stroke Petrol Engine",
            content: "The four-stroke cycle includes: 1) Intake - air/fuel mixture enters, 2) Compression - piston compresses mixture, 3) Power - spark ignites mixture, 4) Exhaust - burnt gases expelled. This cycle repeats continuously."
          },
          {
            title: "Diesel Engine Operation",
            content: "Diesel engines compress air to high temperatures, then inject fuel which ignites from compression heat. They have higher compression ratios than petrol engines and require precise injection timing."
          },
          {
            title: "Engine Components",
            content: "Key components include: cylinder block (main structure), cylinder head (houses valves), crankshaft (converts linear to rotary motion), camshaft (operates valves), pistons (create compression), and connecting rods (link pistons to crankshaft)."
          },
          {
            title: "Engine Configurations",
            content: "Engines come in inline (cylinders in a row), V-configuration (cylinders in V-shape), and flat (opposed cylinders) layouts. Each has advantages for different applications and vehicle designs."
          }
        ]
      },
      quiz: [
        {
          question: "In a four-stroke engine, which stroke produces power?",
          options: ["Intake", "Compression", "Power/Combustion", "Exhaust"],
          correct: 2
        },
        {
          question: "What ignites the fuel in a diesel engine?",
          options: ["Spark plug", "Heat from compression", "Glow plug only", "Battery current"],
          correct: 1
        },
        {
          question: "Which component converts the piston's linear motion into rotary motion?",
          options: ["Camshaft", "Connecting rod", "Crankshaft", "Flywheel"],
          correct: 2
        }
      ]
    },
    {
      id: 3,
      title: "Lubrication & Cooling Systems",
      icon: "💧",
      content: {
        intro: "Lubrication and cooling systems prevent engine damage from friction and heat. Proper maintenance of these systems is critical.",
        topics: [
          {
            title: "Engine Lubrication",
            content: "Oil reduces friction between moving parts, cools components, cleans the engine, and seals gaps. The system includes oil pan/sump, oil pump (gear, vane, or rotor type), filters, and pressure sensors."
          },
          {
            title: "Lubrication Maintenance",
            content: "Regular tasks include checking oil levels, selecting correct lubricant grades, replacing filters, and proper waste disposal. Oil changes prevent sludge buildup and maintain engine protection."
          },
          {
            title: "Cooling System Principles",
            content: "Liquid cooling systems circulate coolant through the engine to absorb heat. Components include radiator (heat dissipation), water pump (circulation), thermostat (temperature control), and cooling fans."
          },
          {
            title: "Cooling System Maintenance",
            content: "Check coolant levels regularly, inspect hoses for cracks, test antifreeze concentration, and check for leaks. Proper coolant mixture prevents freezing, boiling, and corrosion."
          }
        ]
      },
      quiz: [
        {
          question: "What are the main functions of engine oil?",
          options: [
            "Only lubricating moving parts",
            "Lubricating, cooling, cleaning, and sealing",
            "Only cooling the engine",
            "Increasing friction"
          ],
          correct: 1
        },
        {
          question: "Which component controls coolant flow based on temperature?",
          options: ["Radiator", "Water pump", "Thermostat", "Expansion tank"],
          correct: 2
        },
        {
          question: "What should you check regularly in the lubrication system?",
          options: ["Oil color only", "Oil level and condition", "Engine speed", "Fuel pressure"],
          correct: 1
        }
      ]
    },
    {
      id: 4,
      title: "Ignition & Fuel Systems",
      icon: "⚡",
      content: {
        intro: "Ignition and fuel systems work together to provide the spark and fuel mixture needed for combustion.",
        topics: [
          {
            title: "Ignition System Types",
            content: "Modern systems include distributor-less ignition and direct ignition (coil-on-plug). Components include battery, ignition coil, spark plugs, HT leads, and ECU. Timing control ensures spark occurs at optimal moment."
          },
          {
            title: "Petrol Safety & Storage",
            content: "Petrol is highly flammable - no smoking or naked flames. Store in approved containers in well-ventilated areas. Follow regulations for storage quantities and handling procedures. Use appropriate PPE."
          },
          {
            title: "Fuel Injection Systems",
            content: "Modern systems use electronic fuel injection controlled by ECU. Components include fuel pump, injectors, pressure regulator, and various sensors. The system maintains the stoichiometric ratio (14.7:1 air to fuel)."
          },
          {
            title: "Fuel Atomization",
            content: "Breaking fuel into fine droplets ensures complete combustion. Injectors spray fuel at high pressure, creating a mist that mixes thoroughly with air for efficient burning and reduced emissions."
          }
        ]
      },
      quiz: [
        {
          question: "What is the stoichiometric ratio for petrol engines?",
          options: ["10:1", "14.7:1", "20:1", "25:1"],
          correct: 1
        },
        {
          question: "Why is fuel atomization important?",
          options: [
            "To make the engine louder",
            "To ensure complete combustion and efficiency",
            "To increase fuel consumption",
            "To reduce engine power"
          ],
          correct: 1
        },
        {
          question: "Which safety precaution is essential when handling petrol?",
          options: [
            "Use in enclosed spaces",
            "No smoking or naked flames",
            "Store near heat sources",
            "Mix with diesel"
          ],
          correct: 1
        }
      ]
    },
    {
      id: 5,
      title: "Diesel Fuel Systems",
      icon: "🛢️",
      content: {
        intro: "Diesel fuel systems operate at high pressures and require precise timing for efficient operation.",
        topics: [
          {
            title: "Diesel Safety",
            content: "While less flammable than petrol, diesel is still hazardous. Avoid skin contact, use PPE, ensure good ventilation, and follow storage regulations. Proper handling prevents environmental contamination."
          },
          {
            title: "Diesel System Types",
            content: "Systems include inline pump, rotary pump, and modern common rail. Common rail systems maintain high pressure fuel in a rail, allowing precise injection timing controlled by ECU for each cylinder."
          },
          {
            title: "System Components",
            content: "Key components include fuel tank, filters, water traps (diesel attracts water), injection pump, injectors, governors (control engine speed), and cold start aids like glow plugs."
          },
          {
            title: "Injection Timing",
            content: "Precise injection timing is critical for diesel efficiency and emissions. ECU controls injection based on engine speed, load, and temperature sensors. Advanced systems use multiple injections per cycle."
          }
        ]
      },
      quiz: [
        {
          question: "What is the purpose of a water trap in a diesel fuel system?",
          options: [
            "To add water to fuel",
            "To remove water that accumulates in diesel",
            "To cool the fuel",
            "To measure fuel consumption"
          ],
          correct: 1
        },
        {
          question: "Which modern diesel system maintains constant high fuel pressure?",
          options: ["Inline pump", "Rotary pump", "Common rail", "Carburetor"],
          correct: 2
        },
        {
          question: "What helps start diesel engines in cold conditions?",
          options: ["Spark plugs", "Glow plugs", "Alternator", "Starter motor only"],
          correct: 1
        }
      ]
    },
    {
      id: 6,
      title: "Clutches & Gearboxes",
      icon: "🔄",
      content: {
        intro: "The transmission system transfers power from the engine to the wheels, allowing speed and torque variation.",
        topics: [
          {
            title: "Clutch Function",
            content: "The clutch disconnects the engine from gearbox for smooth gear changes. Components include pressure plate (applies force), driven plate (friction disc), flywheel (smooth running), and release bearing."
          },
          {
            title: "Manual Gearbox",
            content: "Manual gearboxes use constant mesh gears, with selector mechanisms engaging different gear ratios. Synchromesh mechanisms ensure smooth engagement by matching gear speeds. Lubrication is crucial for longevity."
          },
          {
            title: "Automatic Gearbox",
            content: "Automatic transmissions use torque converters instead of clutches, with hydraulic operation. ECU controls gear selection based on throttle position, speed, and driving conditions. Includes clutch packs and planetary gear sets."
          },
          {
            title: "Dual Mass Flywheel",
            content: "Modern vehicles use dual mass flywheels to reduce vibration and noise. They have two masses connected by springs, absorbing torsional vibrations from the engine before reaching the transmission."
          }
        ]
      },
      quiz: [
        {
          question: "What is the primary function of a clutch?",
          options: [
            "To increase engine power",
            "To disconnect engine from gearbox",
            "To cool the transmission",
            "To generate electricity"
          ],
          correct: 1
        },
        {
          question: "What component in automatics replaces the clutch?",
          options: ["Flywheel", "Pressure plate", "Torque converter", "Gear selector"],
          correct: 2
        },
        {
          question: "What is the purpose of synchromesh in a manual gearbox?",
          options: [
            "To increase fuel consumption",
            "To match gear speeds for smooth engagement",
            "To create more noise",
            "To reduce engine power"
          ],
          correct: 1
        }
      ]
    },
    {
      id: 7,
      title: "Driveline & Final Drive",
      icon: "🔗",
      content: {
        intro: "The driveline transmits power from the gearbox to the wheels, with final drive systems reducing speed and increasing torque.",
        topics: [
          {
            title: "Drive Shafts",
            content: "Drive shafts connect the gearbox to final drive. They include universal joints (allow angle changes), sliding couplings (accommodate length changes), and constant velocity (CV) joints for smooth power transfer at varying angles."
          },
          {
            title: "Final Drive Gears",
            content: "Final drive uses helical or hypoid gears for quiet operation and high load capacity. These reduce speed from gearbox output to wheel speed while increasing torque available at wheels."
          },
          {
            title: "Differential",
            content: "The differential allows wheels to rotate at different speeds during cornering (outer wheel travels further). It splits torque between drive wheels while permitting speed differences."
          },
          {
            title: "Hubs & Bearings",
            content: "Wheel hubs support vehicle weight and allow rotation. Bearings reduce friction and must be properly lubricated and adjusted. Half shafts transmit power to individual wheels in driven axles."
          }
        ]
      },
      quiz: [
        {
          question: "What is the main function of a differential?",
          options: [
            "To increase fuel efficiency",
            "To allow wheels to rotate at different speeds",
            "To charge the battery",
            "To cool the brakes"
          ],
          correct: 1
        },
        {
          question: "Which type of joint maintains constant velocity at varying angles?",
          options: ["Universal joint", "CV joint", "Sliding coupling", "Rigid joint"],
          correct: 1
        },
        {
          question: "What do final drive gears do?",
          options: [
            "Increase speed and reduce torque",
            "Reduce speed and increase torque",
            "Maintain speed and torque",
            "Only change direction"
          ],
          correct: 1
        }
      ]
    },
    {
      id: 8,
      title: "Steering Systems",
      icon: "🎯",
      content: {
        intro: "Steering systems allow drivers to control vehicle direction safely and precisely.",
        topics: [
          {
            title: "Steering Components",
            content: "Key components include steering wheel, column (often collapsible for safety), steering box or rack, steering arms, linkages, and joints. Power steering uses hydraulic or electric assistance for easier turning."
          },
          {
            title: "Power Steering",
            content: "Hydraulic systems use engine-driven pumps and control valves to provide assistance. Electric systems use motors controlled by ECU for variable assistance based on speed. Both reduce steering effort significantly."
          },
          {
            title: "Steering Geometry",
            content: "Proper alignment includes camber (wheel tilt), castor (pivot angle), and toe (wheel direction). Correct geometry ensures straight-line stability, proper tire wear, and predictable handling."
          },
          {
            title: "Safety Features",
            content: "Collapsible steering columns absorb impact energy in crashes. Universal joints and flexible couplings allow smooth operation. Regular inspection of bushes and joints ensures safe steering response."
          }
        ]
      },
      quiz: [
        {
          question: "What is the purpose of power steering?",
          options: [
            "To make steering heavier",
            "To reduce steering effort",
            "To increase fuel consumption",
            "To make the car faster"
          ],
          correct: 1
        },
        {
          question: "Which steering geometry measurement refers to wheel tilt?",
          options: ["Toe", "Camber", "Castor", "Tracking"],
          correct: 1
        },
        {
          question: "Why are collapsible steering columns used?",
          options: [
            "To save space",
            "To reduce weight",
            "To absorb impact energy in crashes",
            "To improve fuel economy"
          ],
          correct: 2
        }
      ]
    },
    {
      id: 9,
      title: "Suspension, Wheels & Tyres",
      icon: "🛞",
      content: {
        intro: "Suspension systems provide comfort and control, while wheels and tyres are the critical interface between vehicle and road.",
        topics: [
          {
            title: "Suspension Systems",
            content: "Independent suspension allows each wheel to move separately for better handling and comfort. Non-independent (beam axle) systems are simpler and stronger. Components include springs (coil, leaf, air), dampers (shock absorbers), and control arms."
          },
          {
            title: "Tyre Construction",
            content: "Modern tyres are radial with cords running perpendicular to direction of travel. They may be tubed or tubeless. Tread patterns are designed for grip, water dispersal, and wear characteristics."
          },
          {
            title: "Tyre Markings",
            content: "Sidewalls show width (mm), aspect ratio (height/width %), rim size (inches), load index, and speed rating. Direction arrows show rotation direction. Pressure recommendations ensure safe operation and proper wear."
          },
          {
            title: "Wheel Types",
            content: "Steel wheels are durable and economical. Alloy wheels are lighter and dissipate heat better. Space saver spare wheels are temporary use only. Each type requires specific balancing and mounting procedures."
          }
        ]
      },
      quiz: [
        {
          question: "What is the advantage of independent suspension?",
          options: [
            "Lower cost",
            "Each wheel can move separately for better handling",
            "Heavier weight",
            "More complex maintenance only"
          ],
          correct: 1
        },
        {
          question: "What does the aspect ratio on a tyre indicate?",
          options: [
            "Tyre width in inches",
            "Rim diameter",
            "Height as percentage of width",
            "Speed rating"
          ],
          correct: 2
        },
        {
          question: "Which tyre construction is standard in modern vehicles?",
          options: ["Bias ply", "Cross ply", "Radial", "Diagonal"],
          correct: 2
        }
      ]
    },
    {
      id: 10,
      title: "Braking Systems",
      icon: "🛑",
      content: {
        intro: "Braking systems are critical for safety, converting kinetic energy to heat to slow or stop the vehicle.",
        topics: [
          {
            title: "Disc & Drum Brakes",
            content: "Disc brakes use calipers with pads gripping a rotor - better heat dissipation and performance. Drum brakes use shoes pressing outward against drum - effective for rear brakes and parking brake integration."
          },
          {
            title: "Hydraulic System",
            content: "Master cylinder converts pedal force to hydraulic pressure. Brake fluid transmits this through pipes to wheel cylinders or calipers. Vacuum servo assists pedal effort. Split systems provide redundancy for safety."
          },
          {
            title: "ABS (Anti-lock Braking)",
            content: "ABS prevents wheel lockup during heavy braking by modulating pressure. Wheel speed sensors monitor rotation. ECU controls valves to maintain traction, allowing steering control while braking."
          },
          {
            title: "Maintenance Requirements",
            content: "Check fluid levels and contamination, inspect pads/shoes for wear (minimum thickness standards), check disc/drum condition, test servo operation, verify warning lights function, and assess overall efficiency regularly."
          }
        ]
      },
      quiz: [
        {
          question: "What advantage do disc brakes have over drum brakes?",
          options: [
            "Lower cost",
            "Better heat dissipation",
            "More complex only",
            "Heavier weight"
          ],
          correct: 1
        },
        {
          question: "What is the primary function of ABS?",
          options: [
            "To increase braking distance",
            "To prevent wheel lockup and maintain steering control",
            "To reduce brake pad life",
            "To make brakes heavier"
          ],
          correct: 1
        },
        {
          question: "What should be checked regularly in brake fluid?",
          options: [
            "Color only",
            "Level and contamination",
            "Temperature",
            "Smell"
          ],
          correct: 1
        }
      ]
    },
    {
      id: 11,
      title: "Electrical & Electronic Systems",
      icon: "🔋",
      content: {
        intro: "Modern vehicles rely heavily on electrical and electronic systems for starting, charging, lighting, and control functions.",
        topics: [
          {
            title: "Battery & Charging",
            content: "Lead-acid batteries store electrical energy chemically. The alternator generates AC current (converted to DC) to charge battery and power systems while engine runs. Belt drives connect alternator to engine crankshaft."
          },
          {
            title: "Starting System",
            content: "Pre-engaged starter motors use solenoid to engage drive gear with flywheel ring gear. High current from battery powers motor which cranks engine. Ignition switch controls circuit activation."
          },
          {
            title: "Lighting Systems",
            content: "Bulb types include tungsten filament (basic), halogen (brighter and whiter), HID/Xenon (arc discharge, very bright), and LED (efficient, long-lasting). Each has specific advantages and replacement procedures."
          },
          {
            title: "Auxiliary Systems",
            content: "Includes indicators, wipers, horn, heating/ventilation, and infotainment. Modern systems are ECU-controlled with CAN bus communication. Regular checks ensure all systems function correctly for safety and comfort."
          }
        ]
      },
      quiz: [
        {
          question: "What component charges the battery while the engine runs?",
          options: ["Starter motor", "Alternator", "Ignition coil", "Fuel pump"],
          correct: 1
        },
        {
          question: "Which bulb type is most energy-efficient?",
          options: ["Tungsten filament", "Halogen", "HID", "LED"],
          correct: 3
        },
        {
          question: "What engages the starter motor drive gear with the flywheel?",
          options: ["Battery", "Alternator", "Solenoid", "Ignition switch"],
          correct: 2
        }
      ]
    }
  ];

  const getProgress = () => {
    const completed = Object.values(progress).filter(v => v).length;
    return Math.round((completed / modules.length) * 100);
  };

  const handleQuizSubmit = (moduleId) => {
    const currentQuiz = modules[currentModule].quiz;
    const answers = quizAnswers[moduleId] || {};
    const correct = currentQuiz.filter((q, i) => answers[i] === q.correct).length;
    const percentage = Math.round((correct / currentQuiz.length) * 100);
    
    if (percentage >= 70) {
      setProgress({ ...progress, [moduleId]: true });
    }
    
    setShowResults({ total: currentQuiz.length, correct, percentage });
  };

  const resetQuiz = () => {
    setQuizAnswers({ ...quizAnswers, [modules[currentModule].id]: {} });
    setShowResults(false);
  };

  const ContentSection = () => {
    const module = modules[currentModule];
    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-blue-50 to-indigo-50 p-6 rounded-lg border border-blue-200">
          <p className="text-gray-700 leading-relaxed">{module.content.intro}</p>
        </div>
        
        {module.content.topics.map((topic, index) => (
          <div key={index} className="bg-white p-6 rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
            <h3 className="text-xl font-semibold text-gray-800 mb-3 flex items-center">
              <span className="w-8 h-8 bg-blue-500 text-white rounded-full flex items-center justify-center mr-3 text-sm">
                {index + 1}
              </span>
              {topic.title}
            </h3>
            <p className="text-gray-700 leading-relaxed pl-11">{topic.content}</p>
          </div>
        ))}
      </div>
    );
  };

  const QuizSection = () => {
    const module = modules[currentModule];
    const moduleAnswers = quizAnswers[module.id] || {};

    return (
      <div className="space-y-6">
        <div className="bg-gradient-to-r from-purple-50 to-pink-50 p-6 rounded-lg border border-purple-200">
          <h3 className="text-xl font-semibold text-gray-800 mb-2">Knowledge Check</h3>
          <p className="text-gray-600">Answer all questions to complete this module. You need 70% or higher to pass.</p>
        </div>

        {!showResults ? (
          <>
            {module.quiz.map((question, qIndex) => (
              <div key={qIndex} className="bg-white p-6 rounded-lg border border-gray-200">
                <p className="font-semibold text-gray-800 mb-4">
                  <span className="text-purple-600 mr-2">Q{qIndex + 1}.</span>
                  {question.question}
                </p>
                <div className="space-y-2">
                  {question.options.map((option, oIndex) => (
                    <label
                      key={oIndex}
                      className={`flex items-center p-3 rounded-lg cursor-pointer transition-colors ${
                        moduleAnswers[qIndex] === oIndex
                          ? 'bg-purple-100 border-2 border-purple-500'
                          : 'bg-gray-50 border-2 border-transparent hover:bg-gray-100'
                      }`}
                    >
                      <input
                        type="radio"
                        name={`q${qIndex}`}
                        checked={moduleAnswers[qIndex] === oIndex}
                        onChange={() => {
                          setQuizAnswers({
                            ...quizAnswers,
                            [module.id]: { ...moduleAnswers, [qIndex]: oIndex }
                          });
                        }}
                        className="mr-3"
                      />
                      <span className="text-gray-700">{option}</span>
                    </label>
                  ))}
                </div>
              </div>
            ))}

            <button
              onClick={() => handleQuizSubmit(module.id)}
              disabled={Object.keys(moduleAnswers).length !== module.quiz.length}
              className="w-full bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 rounded-lg font-semibold hover:from-purple-700 hover:to-pink-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
            >
              Submit Quiz
            </button>
          </>
        ) : (
          <div className="bg-white p-8 rounded-lg border-2 border-gray-200 text-center">
            <div className={`text-6xl mb-4 ${showResults.percentage >= 70 ? 'text-green-500' : 'text-orange-500'}`}>
              {showResults.percentage >= 70 ? '🎉' : '📚'}
            </div>
            <h3 className="text-2xl font-bold mb-2">
              {showResults.percentage >= 70 ? 'Congratulations!' : 'Keep Learning!'}
            </h3>
            <p className="text-4xl font-bold text-gray-800 mb-2">{showResults.percentage}%</p>
            <p className="text-gray-600 mb-6">
              You got {showResults.correct} out of {showResults.total} questions correct
            </p>
            
            {showResults.percentage >= 70 ? (
              <div className="bg-green-50 border border-green-200 rounded-lg p-4 mb-4">
                <p className="text-green-800 font-semibold">✓ Module Completed</p>
                <p className="text-green-700 text-sm">You've successfully passed this module!</p>
              </div>
            ) : (
              <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mb-4">
                <p className="text-orange-800 font-semibold">Review the content and try again</p>
                <p className="text-orange-700 text-sm">You need 70% to pass this module.</p>
              </div>
            )}

            <div className="flex gap-3 justify-center">
              <button
                onClick={resetQuiz}
                className="flex items-center gap-2 px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-gray-200 transition-colors"
              >
                <RotateCcw size={18} />
                Retry Quiz
              </button>
              {showResults.percentage >= 70 && currentModule < modules.length - 1 && (
                <button
                  onClick={() => {
                    setCurrentModule(currentModule + 1);
                    setCurrentSection('content');
                    setShowResults(false);
                  }}
                  className="flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-lg hover:from-blue-700 hover:to-indigo-700 transition-all"
                >
                  Next Module
                  <ChevronRight size={18} />
                </button>
              )}
            </div>
          </div>
        )}
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-blue-50">
      {/* Header */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold flex items-center gap-3">
                <BookOpen size={36} />
                Vehicle Maintenance Training
              </h1>
              <p className="text-blue-100 mt-1">Level 1 Certificate - Unit 727/777</p>
            </div>
            <div className="text-right">
              <div className="text-sm text-blue-100">Overall Progress</div>
              <div className="text-3xl font-bold">{getProgress()}%</div>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          {/* Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-lg shadow-md p-4 sticky top-4">
              <h2 className="font-semibold text-gray-800 mb-4 flex items-center gap-2">
                <Award size={20} className="text-blue-600" />
                Course Modules
              </h2>
              <div className="space-y-2">
                {modules.map((module, index) => (
                  <button
                    key={module.id}
                    onClick={() => {
                      setCurrentModule(index);
                      setCurrentSection('content');
                      setShowResults(false);
                    }}
                    className={`w-full text-left p-3 rounded-lg transition-all ${
                      currentModule === index
                        ? 'bg-blue-500 text-white shadow-md'
                        : 'bg-gray-50 text-gray-700 hover:bg-gray-100'
                    }`}
                  >
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{module.icon}</span>
                      <div className="flex-1 min-w-0">
                        <div className="text-sm font-medium truncate">
                          Module {module.id}
                        </div>
                        <div className="text-xs opacity-90 truncate">
                          {module.title}
                        </div>
                      </div>
                      {progress[module.id] ? (
                        <CheckCircle size={18} className="text-green-400 flex-shrink-0" />
                      ) : (
                        <Circle size={18} className="opacity-30 flex-shrink-0" />
                      )}
                    </div>
                  </button>
                ))}
              </div>

              {getProgress() === 100 && (
                <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-lg text-center">
                  <Award size={32} className="text-green-600 mx-auto mb-2" />
                  <p className="font-semibold text-green-800">Course Complete!</p>
                  <p className="text-sm text-green-700 mt-1">Well done on finishing all modules</p>
                </div>
              )}
            </div>
          </div>

          {/* Main Content */}
          <div className="lg:col-span-3">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              {/* Module Header */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 p-6 border-b">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{modules[currentModule].icon}</div>
                  <div className="flex-1">
                    <div className="text-sm text-gray-600 font-medium">Module {modules[currentModule].id}</div>
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">{modules[currentModule].title}</h2>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setCurrentSection('content')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          currentSection === 'content'
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        📖 Content
                      </button>
                      <button
                        onClick={() => setCurrentSection('quiz')}
                        className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                          currentSection === 'quiz'
                            ? 'bg-blue-500 text-white'
                            : 'bg-white text-gray-600 hover:bg-gray-100'
                        }`}
                      >
                        ✍️ Quiz
                      </button>
                    </div>
                  </div>
                  {progress[modules[currentModule].id] && (
                    <div className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-1">
                      <CheckCircle size={16} />
                      Completed
                    </div>
                  )}
                </div>
              </div>

              {/* Content Area */}
              <div className="p-6">
                {currentSection === 'content' ? <ContentSection /> : <QuizSection />}
              </div>

              {/* Navigation Footer */}
              <div className="bg-gray-50 p-4 border-t flex justify-between">
                <button
                  onClick={() => {
                    if (currentModule > 0) {
                      setCurrentModule(currentModule - 1);
                      setCurrentSection('content');
                      setShowResults(false);
                    }
                  }}
                  disabled={currentModule === 0}
                  className="flex items-center gap-2 px-4 py-2 bg-gray-200 text-gray-700 rounded-lg hover:bg-gray-300 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft size={18} />
                  Previous
                </button>
                <button
                  onClick={() => {
                    if (currentModule < modules.length - 1) {
                      setCurrentModule(currentModule + 1);
                      setCurrentSection('content');
                      setShowResults(false);
                    }
                  }}
                  disabled={currentModule === modules.length - 1}
                  className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                  Next
                  <ChevronRight size={18} />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VehicleMaintenanceLMS;
