document.addEventListener('DOMContentLoaded', function() {
            
            // Map configuration nodes utilizing strict company brand guidelines with custom textpositions to avoid overlap
            const locations = [
                {
                    name: 'Corporate HQ & Manufacturing Campus',
                    city: 'Jeannette, Pennsylvania (USA)',
                    lat: 40.32,
                    lon: -79.61,
                    type: 'HQ',
                    color: '#ED174F',
                    size: 20,
                    textposition: 'top right', // Offset to prevent collision with Donora
                    details: 'Large customized turbine & compressor production; 13-acre cryogenic testing campus.'
                },
                {
                    name: 'Design & Manufacturing Center',
                    city: 'Sodegaura, Chiba (Japan)',
                    lat: 35.53,
                    lon: 140.00,
                    type: 'HQ',
                    color: '#ED174F',
                    size: 18,
                    textposition: 'top center',
                    details: 'Primary Japanese turbomachinery production, advanced engineering hub.'
                },
                {
                    name: 'South Asian Turbine Assembly Plant',
                    city: 'Bengaluru (India)',
                    lat: 12.97,
                    lon: 77.59,
                    type: 'Mfg',
                    color: '#007F53',
                    size: 16,
                    textposition: 'top center',
                    details: 'World-class 5,000 sqm YR steam turbine manufacturing & mechanical test loop.'
                },
                {
                    name: 'Bearing Manufacturing Center',
                    city: 'Donora, Pennsylvania (USA)',
                    lat: 40.18,
                    lon: -79.85,
                    type: 'Mfg',
                    color: '#007F53',
                    size: 14,
                    textposition: 'bottom left',
                    details: 'Specialized manufacturing facility for key seat and spherical seat tilting pad bearings.'
                },
                {
                    name: 'Global Parts Distribution Depot',
                    city: 'Silchester (UK)',
                    lat: 51.35,
                    lon: -1.08,
                    type: 'Support',
                    color: '#EAAA21',
                    size: 13,
                    textposition: 'top left',
                    details: 'Strategic aftermarket distribution center serving Europe, Middle East, and Africa.'
                },
                {
                    name: 'Technical Training Center',
                    city: 'Harahan, Louisiana (USA)',
                    lat: 29.97,
                    lon: -90.37,
                    type: 'Support',
                    color: '#EAAA21',
                    size: 13,
                    textposition: 'bottom center',
                    details: 'Hands-on instruction center for operators and maintenance personnel.'
                },
                {
                    name: 'Gulf Coast Storage & Rotor Facility',
                    city: 'Houston, Texas (USA)',
                    lat: 29.76,
                    lon: -95.36,
                    type: 'Support',
                    color: '#EAAA21',
                    size: 14,
                    textposition: 'top left',
                    details: 'Climate-controlled vertical rotor storage for units up to 40,000 lbs; drone inventory checks.'
                },
                {
                    name: 'Basingstoke Support Hub (Historic)',
                    city: 'Basingstoke (UK)',
                    lat: 51.26,
                    lon: -1.08,
                    type: 'Repair',
                    color: '#2D2926',
                    size: 13,
                    textposition: 'bottom right',
                    details: 'Company’s historic first international support services hub opened outside the US.'
                },
                {
                    name: 'East Asian Service Center',
                    city: 'Tianjin (China)',
                    lat: 39.12,
                    lon: 117.20,
                    type: 'Repair',
                    color: '#2D2926',
                    size: 13,
                    textposition: 'top center',
                    details: 'Strategic ISO 9001 and 14001 certified repair operations serving China and East Asia.'
                },
                {
                    name: 'Middle East Support Hub',
                    city: 'Al Khobar (Saudi Arabia)',
                    lat: 26.28,
                    lon: 50.21,
                    type: 'Repair',
                    color: '#2D2926',
                    size: 14,
                    textposition: 'top center',
                    details: 'Major localized technical service and repair center supporting regional petrochemical operations.'
                }
            ];

            // Setup Data Series with brand matching metrics and polished custom hover layout
            const mapData = [{
                type: 'scattergeo',
                mode: 'markers+text',
                lat: locations.map(loc => loc.lat),
                lon: locations.map(loc => loc.lon),
                text: locations.map(loc => `<b>${loc.city.split(',')[0]}</b>`),
                textposition: locations.map(loc => loc.textposition), // Individually mapped positions
                textfont: {
                    family: 'Inter, sans-serif',
                    size: 10,
                    color: '#2D2926',
                    weight: 600
                },
                hoverinfo: 'text',
                hovertext: locations.map(loc => `<span style="font-family: 'Inter', sans-serif; font-size: 13px; font-weight: 800; color: #003DA5;">${loc.name}</span><br><span style="font-family: 'Inter', sans-serif; font-size: 11px; font-weight: 600; color: #898D8D;">${loc.city}</span><br><br><span style="font-family: 'Inter', sans-serif; font-size: 11px; color: #2D2926; line-height: 1.4;">${loc.details}</span>`),
                hoverlabel: {
                    bgcolor: '#FFFFFF',
                    bordercolor: '#003DA5',
                    font: {
                        family: 'Inter, sans-serif',
                        size: 11,
                        color: '#2D2926'
                    },
                    align: 'left'
                },
                marker: {
                    size: locations.map(loc => loc.size),
                    color: locations.map(loc => loc.color),
                    line: {
                        color: '#FFFFFF',
                        width: 2
                    },
                    opacity: 0.95
                }
            }];

            // Custom Light-mode layout configuration using shades/complements of the corporate palette
            const mapLayout = {
                geo: {
                    showframe: false,
                    showcoastlines: true,
                    projection: {
                        type: 'equirectangular'
                    },
                    bgcolor: '#F0F4FA', 
                    lakecolor: '#D4E2F5',
                    landcolor: '#FFFFFF',
                    coastlinecolor: '#898D8D',
                    countrycolor: '#E2E8F0',
                    showland: true,
                    showcountries: true,
                    showlakes: true,
                    resolution: 50,
                    center: {
                        lon: 0,
                        lat: 25
                    }
                },
                margin: { l: 0, r: 0, b: 0, t: 0 },
                paper_bgcolor: '#F0F4FA',
                plot_bgcolor: '#F0F4FA'
            };

            // Instantiate Plotly canvas
            Plotly.newPlot('globalMap', mapData, mapLayout, {
                responsive: true,
                displayModeBar: false
            });

            // Automated scrolling horizontal loops engine parameters
            let currentLon = 0;
            let isAutoScrolling = true;
            let scrollInterval;
            const mapElement = document.getElementById('globalMap');
            const toggleButton = document.getElementById('scrollToggle');

            function startAutoScroll() {
                if (scrollInterval) clearInterval(scrollInterval);
                scrollInterval = setInterval(function() {
                    if (isAutoScrolling) {
                        currentLon = (currentLon + 0.35);
                        if (currentLon > 180) currentLon = -180; // Bound tracking reset loop
                        
                        Plotly.relayout('globalMap', {
                            'geo.center.lon': currentLon
                        });
                    }
                }, 50);
            }

            function stopAutoScroll() {
                isAutoScrolling = false;
                toggleButton.innerHTML = "Paused Orbit";
                toggleButton.style.backgroundColor = "#898D8D";
            }

            function resumeAutoScroll() {
                isAutoScrolling = true;
                toggleButton.innerHTML = "Active Orbit";
                toggleButton.style.backgroundColor = "#003DA5";
            }

            // Hook operational canvas interaction callbacks to freeze the window movement during analysis
            mapElement.addEventListener('pointerdown', stopAutoScroll);
            mapElement.addEventListener('willchange', stopAutoScroll);
            
            // Allow manual toggle via control box
            toggleButton.addEventListener('click', function(e) {
                e.stopPropagation();
                if (isAutoScrolling) {
                    stopAutoScroll();
                } else {
                    resumeAutoScroll();
                }
            });

            // Launch tracking loop
            startAutoScroll();

            // Resize alignment handler
            window.addEventListener('resize', function() {
                Plotly.Plots.resize(document.getElementById('globalMap'));
            });
        });
