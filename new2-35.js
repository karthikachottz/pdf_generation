const express = require('express');
const puppeteer = require('puppeteer');
const path = require('path');

const app = express();
const port = 3000;

// Middleware to parse JSON bodies
app.use(express.json());

// Serve the HTML form with form validation
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '2-20.html'));
});

// Serve each image
app.get('/image1', (req, res) => {
    res.sendFile(path.join(__dirname, 'image.jpg'));
});

app.get('/image2', (req, res) => {
    res.sendFile(path.join(__dirname, 'image2.jpg'));
});
app.get('/image3', (req, res) => {
    res.sendFile(path.join(__dirname, 'image3.jpg'));
});

app.get('/image4', (req, res) => {
    res.sendFile(path.join(__dirname, 'image4.jpg'));
});
app.get('/image5', (req, res) => {
    res.sendFile(path.join(__dirname, 'image5.jpg'));
});

app.get('/image6', (req, res) => {
    res.sendFile(path.join(__dirname, 'image6.jpg'));
});
app.get('/image7', (req, res) => {
    res.sendFile(path.join(__dirname, 'image7.jpg'));
});


// Generate PDF endpoint
app.post('/generate-pdf', async (req, res) => {
    const { stationName, division, contactDetails, moduleDetails, ACM, D43, Det, contractNo, inspectionDate, firm, check, impart ,Embrossing,remarks01,Clearance,remarks02,Height,remarks03,Hole,remarks04,Diameter,remarks05,Rail,remarks06,TRANSMITTER,remarks07,clamps,remarks1,
      bolt,remarks2,tight,remarks3,rx,remarks4,dwc,remarks5,a450,remarks6,Sleepers,remarks7,sod,remarks8,yell,remarks9,grom,remarks10,clr,remarks11,clr2,remarks12,axle,remarks13,
      clr45N,remarks14,ens,remarks15,o450,remarks16,abc,remarks17,a10sq,remarks18,cal,remarks19,a54v,remarks20,r30v,remarks21,r10mv,remarks22,
      ok,remarks23,s1,remarks24,s2,remarks25,s3,remarks26,s4,remarks27,s5,remarks28,s6,remarks29,s7,remarks30,s8,remarks31,s9,remarks32,s10,remarks33,s11,remarks34,s12,remarks35,s13,remarks36
    ,Neoprene,remarks001,tightness,remarks002,gasket,remarks003,trackside,remarks004,plastic,remarks005,Earthing,remarks006,terminal,remarks007,station,remarks008,Placement,remarks009,overvoltage,remarks010,
    tightness70, tightness71, tightness72, tightness73, tightness74, tightness75, tightness76, tightness77, tightness78, tightness79,clearance90,
    remarks90,
    clearance91,
    remarks91,
    clearance92,
    remarks92,
    clearance93,
    remarks93,
    clearance94,
    remarks94,
    clearance95,
    remarks95,
    clearance96,
    remarks96,a1, re1, a2, re2, a3, re3, a4, re4, a5, re5, a6, re6, a7, re7, a8, re8,a9, re9, a10, re10, a11, re11,
    re12, re13, re14, re15, re16, re17, re18, re19, re20, re21,re22,re23,
    pla111, remarks111, pla112, remarks112, pla113, remarks114, pla115, remarks115, pla116, remarks116, pla117, remarks117, pla118, remarks118, pla119, remarks119,remarks131, remarks132, remarks133, remarks134, remarks135, remarks136, remarks137, remarks138,
    remarks151, remarks152, remarks153, remarks154, remarks155, remarks156, remarks157, remarks158, remarks159, remarks1500, remarks1501, remarks1502, remarks1503, remarks1504, remarks1505, remarks1506, remarks1507, remarks1508,
    remarks191, remarks192, remarks193, remarks194, remarks195, remarks196,
    g1, g2, g3, g4, g5, g6, g7, g8, g9, g10,d1, rem1, d2, rem2, d3, rem3, d4, rem4, d5, rem5, d6, rem6, d7, rem7,
    c1, c2, c3, c4, c5, c6, c7, c8, c9, c10, c11, c12, c13, c14, c15, c16, c17, c18, c19, c20, c21, c22, c23, c24, c25, c26, c27, c28, c29, c30, c31, c32, c33, c34, c35, c36, c37, c38, c39, c40, c41, c42, c43, c44, c45, c46, c47, c48, c49, c50, c51, c52, c53, c54, c55, c56, c57, c58, c59, c60, c61, c62, c63, c64, c65, c66, c67, c68, c69, c70, c71, c72, c73, c74, c75, c76, c77, c78, c79, c80,
    b1,b2,b3,b4,b5,r1,r2,r3,r4,r5












} = req.body;

    try {
        const browser = await puppeteer.launch({
            executablePath: 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe' // Provide your Chrome executable path here
        });

        const page = await browser.newPage();
        // CSS styles
     

        // Load the HTML content with filled form data
        await page.setContent(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Form Validation</title>
        <style>
        /* Style for the table container */
        .page-break {
            page-break-before: always;
        }
       
        /* Style for the table container */
        body{
            margin:auto;
        }
       
        .table-container {
            width: 100%;
            margin:0 auto;
        }
       
       
       
       
       
       
        /* Style for the table */
        table {
            border-collapse: collapse;
            width: 100%;
        }
       
        /* Style for table rows */
        tr {
            border: 1px solid black; /* Add border to each row */
        }
       
        /* Style for table data cells */
        td {
            padding: 8px;
            border: none; /* Remove border for data cells */
            text-align: left; /* Align text to the left */
            font-size: 16px; /* Reduce font size */
            position: relative; /* Enable relative positioning */
        }
       
       
       
       
        /* Style for text input */
        input[type="text"] {
            width: calc(100% - 16px); /* Adjust width to account for padding */
            padding: 8px;
            border: none; /* Remove border for text input */
            box-sizing: border-box;
            font-size: 16px; /* Reduce font size */
        }
       
        /* Style for the center line */
        td::after {
            content: "";
            position: absolute;
            top: 0;
            bottom: 0;
            right: 0; /* Align the line to the right */
            width: 1px;
            background-color: black;
        }
       
        /* Style for the outer border */
        .outer-box {
            border: 1px solid black; /* Set border properties */
            width: 87%; /* Set width of the box */
            margin: 0 auto; /* Center the box horizontally */
            padding: 20px; /* Add padding for spacing */
            display: flex; /* Use flexbox */
            flex-direction: column; /* Set flex direction to column */
           /* Center items horizontally */
        }
       
        .center{
            text-align: center;
        }
        /* Style for the headline */
        .headline {
            font-size: 18px; /* Set font size for the headline */
            /*margin-bottom: 10px;  Add margin at the bottom */
            text-align: left; /* Align text to the left */
        }
        .responsive-image {
            width: 85%;
            height: auto;
            padding-left: 88px;
        }
    
        /* Center align the image within its container */
        .image-container {
            text-align: left;
            width: 85%;
            padding-left: 88px;
        }
       
        html, body {
            height: 100%; /* Make sure the height of html and body is 100% */
            margin: 0; /* Remove default margin */
        }
        
        body {
            display: flex;
            flex-direction: column; /* Arrange body content in a column */
        }
        
        /* Main content should take up all available space except for the footer */
        .main-content {
            flex: 1; /* Main content takes up remaining space */
        }
        
        /* Footer styling */
        .custom-footer {
            background-color: white; /* Set the background color of the footer */
            padding: 20px 50px; /* Adjust padding for positioning */
            text-align: center; /* Center align the content */
            display: flex; /* Use flexbox for the footer */
            justify-content: center; /* Center the footer content */
            position: relative; /* Ensure the footer is positioned properly */
            margin-top: auto; /* Push the footer to the bottom */
        }
        
        /* Container styling */
        .container {
            display: flex;
            justify-content: space-between; /* Distribute space between the signature containers */
            width: 100%; /* Ensure the container takes full width */
            max-width: 1400px; /* Optional: max width for better layout */
            padding: 0 10px; /* Adjust padding to move the right signature container more to the right */
        }
        
        /* Signature container styling */
        .signature-container {
            flex: 1; /* Take up equal space within the container */
            display: ; /* Use flexbox for internal alignment */
            flex-direction: column; /* Arrange items vertically */
        }
        
        .signature-container.left {
            justify-content: flex-start; /* Align items to the start (top) */
            margin-right: 20px; /* Adjust margin as needed */
        }
        
        .signature-container.right {
            justify-content: flex-end; /* Align items to the end (bottom) */
            margin-left: 20px; /* Adjust margin as needed */
        }
        
        /* Signature and related content styling */
        .signature,
        .rsign {
            font-size: 13px; /* Set the font size */
            text-align: center; /* Center align the text */
            margin-bottom: 0px; /* Add spacing between signature content */
        }
        
        /* Upload button styling */
        
        
        /* Hide the file input */
        input[type="file"] {
            display: none; /* Hide the file input */
        }
       
          table {
            width: 90%;
            margin: 0 auto;
          }
          #table1 {
            border-collapse: collapse; /* Collapse table borders */
            width: 90%; /* Set table width */
          }
          #table1 th {
            border: 1px solid black; /* Add border to all table headers */
            padding: 8px; /* Add padding for better appearance */
          }
          #table1 th:not(:last-child) {
            border-right: none; /* Remove right border for all table headers except the last one */
          }
          h2 {
            position: relative; /* Set the position of the heading to relative */
            margin-bottom: 20px; /* Add bottom margin for spacing */
            padding-left: 190px; /* Add padding to the left */
          }
          h2 span:first-child {
            position:relative; /* Set the position of the first span to absolute */
            padding-left:70;  /* Position the first span at the left edge of the h2 */
          }
         
       
        </style>
        </head>
        <body>
        <table id="table1">
            <tr>
                <th>Page 1 of 34</th>
                <th>Document no.:SI-G-7.1-0624</th>
                <th>Version:2.0</th>
                <th>Date of issue:19.11.2019</th>
            </tr>
            <tr><td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
                and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
                
            </tr>
        </table>
        <img src="/image1" style="width: 5%;height: 5%; padding-left: 590px;padding-top: 10px;" alt="Description">

            <p style="padding-left: 65px;text-align: center;font-size: large;"><b>SIGNAL DIRECTORATE
            </b></p><br>
            <p style="padding-left: 65px;text-align: center;font-size: large;"><b>RESEARCH DESIGNS AND STANDARDS ORGANISATION
            </b></p> </br>
            <p style="padding-left: 65px;text-align: center;font-size:medium;"><u><b>MANAK NAGAR, LUCKNOW- 226011</u></b>
            </p></br>
            <p style="padding-left: 65px;text-align: center;font-size: large;"><b><u>TITLE: Pre Commissioning Check List for Multi Section Digital Axle Counter MSDAC</u>
            </b></p>
            <p style="padding-left: 65px;text-align: center;font-size: large;"><b><u>Model: ACM 200 of M/s Siemens India Ltd., Mumbai</u>
            </b></p>
            <p style="padding-left: 65px;text-align: center;font-size: large;"><b><u>(As per RDSO/SPN/176/2013 Version 3.0)</u>
            </b></p>
            <p style="padding-left: 65px;text-align: left;font-size: large;"><b><u>1. Revision History: </u>
            </b></p>
        
                <table id="table1">
                <tr>
                 <td style="width:2%;text-align:center"><b>Sl.No.</b></td>
                 <td style="width:25%;text-align:center"><b>Date of 
                    Amendment</b></td>
                 <td style="width:25%;text-align:center"><b>Document Number and 
                    Version 
                    </b></td>
                        
                 <td style="width:25%;text-align:center"><b>Reasons for Amendment 
                </b> </td>
                 
                        
                </tr>
                <tr>
                    <td style="width:2%;text-align:center"><b>1.</b></td>
                    <td style="width:25%;text-align:center"><b>12.12.2018</b></td>
                    <td style="width:25%;text-align:center"><b>SI-G-7.1- 0624Ver: 1.0
                       </b></td>
                           
                    <td style="width:25%;text-align:center"><b>First Issue
                   </b> </td>
                    
                           
                   </tr>
                   <tr>
                    <td style="width:2%;text-align:center"><b>2.</b></td>
                    <td style="width:25%;text-align:center"><b>19.11.2019</b></td>
                    <td style="width:25%;text-align:center"><b>SI-G-7.1- 0624 Ver: 2.0
                       </b></td>
                           
                    <td style="width:25%;text-align:center"><b>Second Issue due to upgrade of the “Oscillation 
                        Tolerance” Function in Software.  
                   </b> </td>
                    
                           
                   </tr>
                   </table>
                   <p style="padding-left: 65px;text-align: left;font-size: large;"><b><u>2. Document Data 
                </u>
                   </b></p>
               
                       <table id="table1">
                       <tr>
                        <td style="width:2%;text-align:center"><b>Document Title</b></td>
                        <td style="width:25%;text-align:center"><b>Pre Commissioning Check List for Multi Section Digital Axle Counter ACM 200 
                            of M/s Siemens India Ltd. 
                            </b></td>
                               
                       </tr>
                       <tr>
                           <td style="width:2%;text-align:center"><b>Abstract 
                        </b></td>
                           <td style="width:25%;text-align:center"><b>This document defines the measurements and requirement for commission of
                            Multi Section Digital Axle Counter MSDAC Model: ACM 200 of M/s Siemens 
                            India Ltd., Mumbai. </b></td>
                           
                          </tr>
                          <tr>
                           <td style="width:2%;text-align:center"><b>Document Number and Version</b></td>
                           <td style="width:25%;text-align:center"><b>SI-G-7.1 -0624 Version: 2.0</b></td>
                          
                          </tr>
                          <tr>
                            <td style="width:2%;text-align:center"><b>Date of Effective:</b></td>
                            <td style="width:25%;text-align:center"><b>19.11.201</b></td>
                           
                           </tr>
                           <tr>
                            <td colspan="2" style="width:2%;text-align:left"><b>RDSO Verified By: 
                                Name: Hari Om Kushwaha 
                                Designation: Director/ Signal </b></td>
                            
                           
                           </tr>
                           <tr>
                            <td colspan="2"  style="width:2%;text-align:left"><b>RDSO Approved By:
                                Name: Rajeev Kant Jain 
                                Designation: Executive Director (Co-ord)/Signal</b></td>
                            
                           
                           </tr>
                          </table>
                         
                       
                        
                        <div class="page-break"></div>

<br>
            <table id="table1">
                <tr>
                    <th>Page 2 of 34</th>
                    <th>Document no.:SI-G-7.1-0624</th>
                    <th>Version:2.0</th>
                    <th>Date of issue:19.11.2019</th>
                </tr>
                <tr><td colspan="4"  style="text-align:center;" >Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
                    and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
                   
                </tr>
            </table>
            <div class="table-container">
                <h2 style="text-align: center;"><span>3.</span><span ><u><b>General Information</b></u></span></h2>
                <table>
                    <tr>
                        <td style="width:5%">1</td>
                        <td style="width:25%">Station/Yard Name:</td>
                        <td>${stationName}</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Division/Zonal Railway:</td>
                        <td>${division}</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Contact Details Of Railways at HQ/Division:</td>
                        <td>${contactDetails}</td>
                    </tr>
                    <tr>
                        <td>4</td>
                        <td>Details of Modules (Refer Annexure E & F)</td>
                        <td>${moduleDetails}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Nos. of ACM Modules</td>
                        <td>${ACM}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Nos. of ZP D43</td>
                        <td>${D43}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td>Total Nos. of Detections & sections</td>
                        <td>${Det}</td>
                    </tr>
                    <tr>
                        <td>5</td>
                        <td>Contract Agreement /LOA/PO No.</td>
                        <td>${contractNo}</td>
                    </tr>
                    <tr>
                        <td>6</td>
                        <td>Date of Pre-Commissioning Inspection</td>
                        <td>${inspectionDate}</td>
                    </tr>
                    <tr>
                        <td>7</td>
                        <td>Firm’s (Siemens) Engineer</td>
                        <td>${firm}</td>
                    </tr>
                    <tr>
                        <td>8</td>
                        <td>Checksum of ACM Module<br>
                        [Can be seen as MD4 Binary file of ACM 200 <br>
                        Software on diagnostic Web Page] <br>
                        ( Refer Annexure I )
                        </td>
                        <td>${check}</td>
                    </tr>
                    <tr>
                    <td>9</td>
                    <td>Imparted Training or Not </td>
                    <td>${impart}</td>
                    </tr>
                </table>
                </div>
                <br>
                <br>
                <br>
                <div class="outer-box">
                <div class="headline" style="text-align: left;"><u>Note:</u></div>
                <div>
                    <p>(1) The system should be installed and commissioned by authorized technical staff of M/S SIEMENS.</p>
                    <p>(2) Tools used by authorized technical staff of M/S SIEMENS should be proper and calibrated.</p>
                    <p>(3) The installation practices should be strictly adhered to and checked before commissioning.</p>
                    <p>(4) All points should be covered as provided in the pre-commissioning checklist.</p>
                </div>
            </div>
            <br>
            <br>
            <footer class="custom-footer">
            <div class="container">
                <div class="signature-container left">
                    <div class="signature">
                        <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                        <input type="file" id="signatureImage1" accept="image/*" required>
                        <p>Signature of Siemens Representative:</p>
                        <p>With Name, Designation & Date</p>
                    </div>
                </div>
                <div class="signature-container right">
                    <div class="rsign">
                        <label for="signatureImage2" class="upload-button" id="uploadButton2"></label>
                        <input type="file" id="signatureImage2" accept="image/*" required>
                        <p>Signature of Railway Representative:</p>
                        <p>With Name, Designation & Date</p>
                    </div>
                </div>
            </div>
        </footer>
        
        

    <div class="page-break"></div>
                <table id="table1">
                <tr>
                    <th>Page 3 of 34</th>
                    <th>Document no.:SI-G-7.1-0624</th>
                    <th>Version:2.0</th>
                    <th>Date of issue:19.11.2019</th>
                </tr>
                <tr><td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
                    and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
                   
                </tr>
            </table>
            <div class="table-container">
                <h2><span>4.</span><span ><u><b>Outdoor (Rail Contact also called track device):</b></u></span></h2>
                <table>
                    <tr>
                       
                        <td style="width:2%;text-align:center"><b>Sr.<br>No.</b></td>
                        <td style="width:15%;text-align:center"><b>Item</b></td>
                        <td style="width:20%;text-align:center"><b>Required</b></td>
                        <td style="width:25%;text-align:center"><b>Measured<br>/Observed</b> </td>
                        <td style="width:25%;text-align:center"><b>Remarks<br>(Ok/Not ok)</b></td>
                    </tr>
                    <tr>
                        <td>4.1</td>
                        <td>Embossing on the rail<br>web.</td>
                        <td>No embossing on the rail web<br>where holes are to be drilled.</td>  

                <td>${Embrossing}</td>
                <td>${remarks01}</td>
            </tr>
            <tr>
                <td>4.2</td>
                <td>Clearance between<br>Sleepers.</td>
                <td>There should be 350mm (Min.)<br>between the sleepers where the<br>sensors are mounted.</td>  
                <td>${Clearance}</td>
                <td>${remarks02}</td>
            </tr>
            <tr>
                <td>4.3</td>
                <td>Rail Height </td>
                <td>60 Kg : 159mm-172mm <br>52 Kg : 148mm-156mm<br>90 R : 138mm-143mm</td>  
                <td>${Height}</td>
                <td>${remarks03}</td>
                </td>
            </tr>
            <tr>
                <td>4.4</td>
                <td>Position of mounting<br>holes on rail.</td>
                <td>60 Kg: 85mm +1.5mm <br>52 Kg: 69mm +1.5mm<br>90 R: 56mm +1.5mm<br>Measured from the bottom of the<br>Rail.</td>  
                <td>${Hole}</td>
                <td>${remarks04}</td>
                </td>
            </tr>
            <tr>
                <td>4.5</td>
                <td>Diameter of the mounting<br>holes.</td>  
                <td>Should be of 13mm dia.  </td>
                <td>${Diameter}</td>
                <td>${remarks05}</td>
            </tr>
            <tr>
                <td>4.6</td>
                <td>Selection of rail for<br>mounting trackside<br>device (wheel sensor).</td>
                <td>a) The Rail on which the wheel
                    <br>sensor is mounted can be either<br>rail on a straight track where<br>both rails are at the same<br>height.<br>b) On a curved track the wheel<br>sensor must always be mounted<br>on the outer rail with respect to<br>the curvature, i.e. rail farthest
                    <br>from the Centre of curvature, or <br>on the rail which is higher than<br>the other.
                </td>  
                <td>${Rail}</td>
                <td>${remarks06}</td>
            </tr>
            <tr>
                <td>4.7</td>
                <td>Fixing of rail contacts<BR>(Trackside Device) & <BR>Transmitter and Receiver <BR>reduction plates.
                </td>  
                <td>Transmitter part having label
                    <br>("SENDER") to be fixed on the<br>Outside of the rail.<BR><BR>Receiver part having label<BR>
                        ("EMPFANGER") to be fixed on the<BR>
                        inside of the rail.<BR><BR>
                        Reduction plates matching the rail<BR>
                        profile to be fitted against the rail<BR>
                        web.
                         </td>  
                <td>${TRANSMITTER}</td>
                <td>${remarks07}</td>
            </tr>

        </table>
        <footer class="custom-footer">
        <div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>
                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton2"></label>
                    <input type="file" id="signatureImage2" accept="image/*" required>
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>
    </footer>
    
       
 
        <div class="page-break"></div>
       
    <table id="table1">
    <tr>
        <th>Page 4 of 34</th>
        <th>Document no.:SI-G-7.1-0624</th>
        <th>Version:2.0</th>
        <th>Date of issue:19.11.2019</th>
    </tr>
    <tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
        and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
       
    </tr>
</table>
<br>

<div class="table-container">
   
    <table>
   
        <tr>
            <td style="width:2%">4.8</td>
            <td style="width:15%">Fixing of Sensor clamps </td>
            <td style="width:22%">The sensor clamps should be fixed <br>
                properly to reduce vibration on Tx <br>
& Rx side</td>  
            <td>${clamps}</td>
            <td>${remarks1}</td>
        </tr>
        <tr>
            <td>4.9</td>
            <td>Nuts, bolts & washers for
                 <br>fixing the rail contacts.</td>
            <td>The Nuts, Bolts (2 each) and<br>washers supplied with the rail <br>contacts must be used for fixing<br>the rail contacts.
<br> The bolts must be inserted from<br> the receiver side              </td>  
<td>${bolt}</td>
<td>${remarks2}</td>
        </tr>
        <tr>
            <td>4.10</td>
            <td>Torque applied to tighten <br>the rail contacts.
            </td>
            <td>45 Nm ± 5 using the torque wrench <br>Supplied with the tool kit. </td>  
            <td>${tight}</td>
            <td>${remarks3}</td>
        </tr>
        <tr>
            <td>4.11</td>
            <td> Exposed Tx and Rx cables <br>between DWC/HDPE pipe<br>and the heads.
            </td>
            <td style="text-align: justify;">Should be free from obstruction  <br>and have adequate radius of <br>curvature</td>  
            <td>${rx}</td>
            <td>${remarks4}</td>
        </tr>
        <tr>
            <td>4.12</td>
            <td>Protection of Tx and Rx
                <br>cables.</td>  
            <td>Both Tx and Rx cables must be <br>protected through DWC/HDPE pipe<br> at least 80 mm with outer dia.</td>
            <td>${dwc}</td>
            <td>${remarks5}</td>
        </tr>
        <tr>
            <td>4.13</td>
            <td> Position of deflectors. </td>
            <td>To be fitted at least 450 mm away <br>from the rail contacts on either <br>side</td>  
            <td>${a450}</td>
            <td>${remarks6}</td>
        </tr>
        <tr>
            <td>4.14</td>
            <td>Height of Deflectors <br>Sleepers.</td>
            <td>To be adjusted as per the rail <br>profile.</td>  
           
            <td>${Sleepers}</td>
            <td>${remarks7}</td>
        </tr>
        </table>
<br>

<h2 style="text-align: justify-center;"><span>4.</span><span ><u><b>Outdoor(Location Box / Mushroom Cover / Dust cover): </b></u></span></h2>
<br>
<table>
    <tr >
        <td style="width:2%;text-align: center"><b>Sr.<br>No.</b></td>
        <td style="width:15%;text-align: center"><b>Item</b></td>
        <td style="width:20%;text-align: center"><b>Required</b></td>
        <td style="width:25%;text-align: center"><b>Measured<br>/Observed</b> </td>
        <td style="width:25%;text-align: center"><b>Remarks<br>(Ok/Not ok)</b></td>
    </tr>
    <tr>
        <td>5.1</td>
        <td>Foundation along with<br>Trackside connection box</td>
        <td>Should be firm, <br>Straight within permissible height<br>and should not infringe with the
<br>Railways SOD.             </td>  
       
<td>${sod}</td>
<td>${remarks8}</td>
    </tr>
    <tr>
        <td>5.2</td>
        <td>Trackside connection Box<br>with yellow plastic cover.<br>Installed either inside<br>Location box or outside of <br>Location box. </td>
        <td>To be fitted firm and tightened             </td>  
        <td>${yell}</td>
        <td>${remarks9}</td>

    </tr>
    <tr>
        <td>5.3</td>
        <td>Water tight rubber<br>grommets (washers with <br>metal rings) in the cable<br>glands. </td>
        <td>To be used properly with all rail <br> contacts cables and quad cable <br>through them and tightened.        </td>  
        <td>${grom}</td>
        <td>${remarks10}</td>

    </tr>
    </table>
    <div class="container">
    <div class="signature-container left">
        <div class="signature">
            <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
            <input type="file" id="signatureImage1" accept="image/*" required>

            <p>Signature of Siemens Representative:</p>
            <p>With Name, Designation & Date</p>
        </div>
    </div>
    <div class="signature-container right">
        <div class="rsign">
            <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

            
            <p>Signature of Railway Representative:</p>
            <p>With Name, Designation & Date</p>
        </div>
    </div>
</div>

    <div class="page-break"></div>
    <table id="table1">
    <tr>
        <th>Page 5 of 34</th>
        <th>Document no.:SI-G-7.1-0624</th>
        <th>Version:2.0</th>
        <th>Date of issue:19.11.2019</th>
    </tr>
    <tr>
        <td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.
        </td>
    </tr>
</table>
<br>
<div class="table-container">
    <table>
        <tr>
            <td style="width:2%">5.4</td>
            <td style="width:15%">Neoprene rings and<br>fastening clips.</td>
            <td style="width:20%">Rings to be used and fixed in place<br>for all cables into the mushroom<br>box and clamp with fastening clips <br>provided</td>  
            <td style="width:25%">${Neoprene}</td>
            <td>${remarks001}</td>
        </tr>
        <tr>
            <td>5.5</td>
            <td style="text-align: justify;">Water-tightness of cable glands.</td>
            <td style="text-align: justify;">All cable glands to be made water tight using silicon rubber solution or equivalent.</td>  
            <td>${tightness}</td>
            <td>${remarks002}</td>
        </tr>
        <tr>
            <td>5.6</td>
            <td style="text-align: justify;">Rubber gasket in the mushroom cover </td>
            <td style="text-align: justify;">Should be one single continuous piece fitted snugly in its groove.</td>  
            <td>${gasket}</td>
            <td>${remarks003}</td>
        </tr>
        <tr>
            <td>5.7</td>
            <td style="text-align: justify;">Closing of the trackside connection box with yellow plastic cover. </td>
            <td style="text-align: justify;">The yellow plastic cover must be fixed by tightening all four bolts at the four corners of the cover.</td>  
            <td>${trackside}</td>
            <td>${remarks004}</td>
        </tr>
        <tr>
            <td>5.8</td>
            <td style="text-align: justify;">Locking the yellow plastic cover of trackside connection box.</td>  
            <td style="text-align: justify;">Yellow plastic cover locked with base of the box using a pad lock.</td>
            <td>${plastic}</td>
            <td>${remarks005}</td>
        </tr>
        <tr>
            <td>5.9</td>
            <td style="text-align: justify;">Earthing of overvoltage protection module.</td>
            <td style="text-align: justify;">The overvoltage protection module inside trackside connection box must be connected to Earth.</td>  
            <td>${Earthing}</td>
            <td>${remarks006}</td>
        </tr>
        <tr>
            <td>5.10</td>
            <td style="text-align: justify;">Earthing to the rail.</td>  
            <td style="text-align: justify;">The earth terminal of TCB must be connected to Earth rail with 25mm² copper cable.</td>  
            <td>${terminal}</td>
            <td>${remarks007}</td>
        </tr>
        <tr>
            <td>5.11</td>
            <td style="text-align: justify;">Earth connection in case of Non RE section/Sub-station area & RE section & Substation area.</td>  
            <td style="text-align: justify;">The earth should be connected to Earth pit whose value should be < 2 ohm in case of Non RE section/Sub-station area and in case of RE section Earth should be connected to the earth rail.</td>  
            <td>${station}</td>
            <td>${remarks008}</td>
        </tr>
    </table>
</div>
<div class="table-container">
    <h2><span>6.</span><span ><u><b>Outdoor Trackside Connection Box and its Electronics – ZP D 43:</b></u></span></h2>
    <table>
        <tr>
            <td style="width:2%;text-align:center"><b>Sr.<br>No.</b></td>
            <td style="width:15%;text-align:center"><b>Item</b></td>
            <td style="width:20%;text-align:center"><b>Required</b></td>
            <td style="width:25%;text-align:center"><b>Measured<br>/Observed</b></td>
            <td style="width:25%;text-align:center"><b>Remarks<br>(Ok/Not ok)</b></td>
        </tr>
        <tr>
            <td>6.1</td>
            <td style="text-align: justify;">Placement of Track side connection box (Refer part list as Sr. no.13)</td>
            <td style="text-align: justify;">Should be fitted Horizontally / Vertically to adaptor plate inside trackside connection box.</td>  
            <td>${Placement}</td>
            <td>${remarks009}</td>
        </tr>
        <tr>
            <td>6.2</td>
            <td style="text-align: justify;">Placement of overvoltage protection module.</td>
            <td style="text-align: justify;">Should be fitted Horizontally/ Vertically to adaptor plate inside trackside connection box with axle detection equipment module.</td>  
            <td>${overvoltage}</td>
            <td>${remarks010}</td>
        </tr>
    </table>
</div>
<div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>

                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                    
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>



<div class="page-break"></div>

    <table id="table1">
        <tr>
            <th>Page 6 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
           
        </tr>
    </table>
    <br>
   
    <div class="table-container">
       
        <table>
       
            <tr>
                <td style="width:2%">6.3</td>
                <td style="width:15%;text-align:justify">Connection of Rx cores to
                    Axle detection equipment
                    module to corresponding
                    terminals.
                    (Refer part list as Sr.
                    no.13)
                     </td>
                <td style="width:22%"><b>Blue (1) </b> terminal-1 of Axle
                    Detection equipment
                    module
                     <br>
                    <b>Green (2)</b>  to terminal-2 of Axle
                     Detection equipment
                     module
                      <br><b>Yellow (3) </b>to terminal-3 of Axle
                      Detection equipment
                      module <br><b>Red (4)</b> to terminal-4 of Axle
                      Detection equipment
                      module.
                     
                     
</td>  
<td>${clr}</td>
<td>${remarks11}</td>
            </tr>
            <tr>
                <td>6.4</td>
                <td style="text-align: justify;">Connection of Tx cores to
                    Axle detection equipment
                    module to corresponding
                    terminals.
                    (Refer part list as per
                    point no.13)
                    </td>
                <td><b>Red (5)</b> to terminal-5 of Axle
                    Detection equipment
                    module. <br>
                    <b>Yellow (6)</b> to terminal-6 of Axle
                    Detection equipment
                    module.<br>
                   <b> Red (7)</b> to terminal-7 of Axle
                    Detection equipment
                    module. <br>
                    <b>Green (8)</b> to terminal-8 of Axle
                    Detection equipment
                    module. <br>
                   <b> Blue (9)</b> to terminal-9 of Axle
                    Detection equipment
                    module.           </td>  
                    <td>${clr2}</td>
                    <td>${remarks12}</td>
            </tr>
            <tr>
                <td>6.5</td>
                <td style="text-align: justify;">Calibration of Axle
                    detection equipment
                </td>
                <td style="text-align: justify;">Calibration process is required
                    after switching on indoor
                    equipment (ACM modules).
                    As per annexure D.</td>  
                    <td>${axle}</td>
                    <td>${remarks13}</td>
            </tr>
            <tr>
                <td>6.6</td>
                <td style="text-align: justify;"> Measurement of
                    electrical parameters at
                    trackside connection box.
                </td>
                <td style="text-align: justify;">The readings are to be taken
                    initially, when the trackside device
                    (Axle sensor) has been fixed to the
                    rail web & tightened using a torque
                    wrench with a force of 45Nm ± 5.</td>  
                    <td>${clr45N}</td>
                    <td>${remarks14}</td>
            </tr>
            <tr>
                <td>6.7</td>
                <td style="text-align: justify;"> Use of star Quad cable for
                    Axle Counter
                    </td>  
                <td style="text-align: justify;">Ensure that star quad cable should
                    not be laid in a common cable
                    route or cable through with cables
                    carrying traction return current. </td>
                    <td>${ens}</td>
        <td>${remarks15}</td>
            </tr>
            <tr>
                <td>6.8</td>
                <td style="text-align: justify;">  Handling of boards  </td>
                <td style="text-align: justify;">Don’t touch the boards in trackside
                    connection box when trackside is
                    functioning. </td>  
                    <td>${o450}</td>
                    <td>${remarks16}</td>
            </tr>
           
        </table>

       </div>
       <div class="container">
       <div class="signature-container left">
           <div class="signature">
               <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
               <input type="file" id="signatureImage1" accept="image/*" required>

               <p>Signature of Siemens Representative:</p>
               <p>With Name, Designation & Date</p>
           </div>
       </div>
       <div class="signature-container right">
           <div class="rsign">
               <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

               
               <p>Signature of Railway Representative:</p>
               <p>With Name, Designation & Date</p>
           </div>
       </div>
   </div>
<div class="page-break"></div>

        <table id="table1">
    <tr>
        <th>Page 7 of 34</th>
        <th>Document no.:SI-G-7.1-0624</th>
        <th>Version:2.0</th>
        <th>Date of issue:19.11.2019</th>
    </tr>
    <tr>
        <td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.
        </td>
    </tr>
</table>
<br>
<div class="table-container">
    <h2><span>6.6.1</span><span ><u><b>Measurement (parameters) at Track side Connection box:
    </b></u></span></h2>
    <table>
        <tr>
            <td style="width:25%;text-align:center"><b>Parameters to be Measured</b></td>
            <td style="width:15%;text-align:center"><b>Acceptable Range</b></td>
            <td style="width:10%;text-align:center"><b>Value at the time of commissioning</b></td>
            <td style="width:10%;text-align:center"><b>Value after tightening trackside device after passage of 25-30 trains</b></td>
        </tr>
        <tr>
            <td style="text-align: justify;">Axle Detection Equipment supply voltage [U 60 at terminal NS]</td>
            <td style="text-align: justify;">30 to 72VDC</td>
            <td>${tightness70}</td>
            <td>${tightness71}</td>
        </tr>
        <tr>
            <td style="text-align: justify;">Axle Detection Equipment [U 60 at terminal FS] (i) supply voltage (ii) supply voltage with local (external) supply</td>
            <td style="text-align: justify;">30 to 72VDC 26 to 50VAC</td>
            <td>${tightness72}</td>
            <td>${tightness73}</td>
        </tr>
        <tr>
            <td style="text-align: justify;">Transmitter frequency of the DEK [double wheel detector] [FS] at terminal 6 and 7 or at terminal 8 and 9</td>
            <td style="text-align: justify;">41.5 to 44.5kHz</td>
            <td>${tightness74}</td>
            <td>${tightness75}</td>
        </tr>
        <tr>
            <td style="text-align: justify;">Receiver voltage 1 [uE1] at terminal 3 and 4</td>
            <td style="text-align: justify;">60 to 150mV</td>
            <td>${tightness76}</td>
            <td>${tightness77}</td>
        </tr>
        <tr>
            <td style="text-align: justify;">Receiver voltage 2 [uE2] at terminal 1 and 2</td>
            <td style="text-align: justify;">60 to 150mV</td>
            <td>${tightness78}</td>
            <td>${tightness79}</td>
        </tr>
        <tr>
            <td style="text-align: justify;">Maximum Control distance from ACM 200 module to Outdoor ZP D 43 (Track Device)</td>
            <td colspan="3" style="text-align: justify;">The typical control distance from Evaluator to Track side connection box is defined as 4.5km. In case of longer distance i.e. more than 4.5km, the broadband transformer (Part No.V25319-Z1-A9-*) is to be used for reduction of influence.</td>
        </tr>
    </table>
</div>
<div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>

                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                    
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>

<div class="page-break"></div>
 
    <table id="table1">
        <tr>
            <th>Page 8 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
           
        </tr>
    </table>
    <br>
    <div class="table-container">
   
    <h2 style="text-align: justify-center;"><span>7.</span><span ><u><b>Indoor Relay Room (Power supply &CT Rack):
    </b></u></span></h2>
    <br>
    <table>
        <tr >
            <td style="width:2%;text-align: center"><b>Sr.<br>No.</b></td>
            <td style="width:15%;text-align: center"><b>Item</b></td>
            <td style="width:20%;text-align: center"><b>Required</b></td>
            <td style="width:25%;text-align: center"><b>Measured<br>/Observed</b> </td>
            <td style="width:25%;text-align: center"><b>Remarks<br>(Ok/Not ok)</b></td>
        </tr>
       
            <tr>
                <td>7.1</td>
                <td style="text-align: justify;"> Power supply
                    </td>
                <td>a) Power supply should be suitable
                    for Axle Counter System.
                    <br>
                    b) There should not be any other
load on the power supply except
the Axle Counter System. <br>
c) Class "B” typesurge protection
must be provided on 230V mains
line. <br>
                             </td>  
                             <td>${abc}</td>
                             <td>${remarks17}</td>
            </tr>
            <tr>
                <td>7.2</td>
                <td style="text-align: justify;"> Cable for feeding
                    (i) 24 or 60VDC to the
                    busbar from main
                    power
                    supply(IPS/Battery
                    Charger ) and <br>
                    (ii)Busbar to Central
                    evaluator
                </td>
                <td style="text-align: justify;">a) Minimum 10 sq.mm multistrand copper cable from main
                    power supply to busbar and <br>
                    b) 2core shielded cable from
                    busbar to ACM modules must
                    be used.
                    </td>  
                    <td>${a10sq}</td>
                    <td>${remarks18}</td>
               
            </tr>
            <tr>
                <td>7.3</td>
                <td style="text-align: justify;"> Total load calculation
                    [Basic current
                    requirement for 1 No. of
                    ACM 200 module and 2
                    Nos. ofZP D 43 = 1.3Amp
                </td>
                <td style="text-align: justify;">Load calculation
                    Includes ACM modules, Detection
                    points & Reset modules/Panel.
                    Load Calculation for fuse rating:
                    ~ 1.5*(No. of ACM modules*12w +
                     No. of Detection point*5w +
                     No. of reset
                    modules*5w/24 or 60 VDC) =
                    Total current. .</td>  
                    <td>${cal}</td>
                             <td>${remarks19}</td>
            </tr>
            <tr>
                <td>7.4</td>
                <td style="text-align: justify;"> Battery Charger Input
                    supply should be off for
                    15 min.
                   
                    </td>  
                <td style="text-align: justify;">Should notbe less than 54VDC. </td>
                <td>${a54v}</td>
                <td>${remarks20}</td>
            </tr>
            <tr>
                <td>7.5</td>
                <td style="text-align: justify;">  Input voltage(local from
                    battery charger) at the
                    Trackside connection box
                    should be off for 15 min. </td>
                <td style="text-align: justify;">Should not be less than 30VDC. </td>  
                <td>${r30v}</td>
                             <td>${remarks21}</td>
            </tr>
            <tr>
                <td>7.6</td>
                <td style="text-align: justify;"> Ripple content of power
                    supply  </td>
                <td style="text-align: justify;">Should not exceed
                    50 mVAC (peak - peak) or
                    10 mV rms.  </td>  
                    <td>${r10mv}</td>
                    <td>${remarks22}</td>
            </tr>
           
        </table>

        <div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>

                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                    
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>
   
        <div class="page-break"></div>
       

<table id="table1">
<tr>
    <th>Page 9 of 34</th>
    <th>Document no.:SI-G-7.1-0624</th>
    <th>Version:2.0</th>
    <th>Date of issue:19.11.2019</th>
</tr>
<tr>
    <td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
        and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
</tr>
</table>
<br>
<div class="table-container">
<table>
    <tr>
        <td style="width:2%;text-align: justify;">7.7</td>
        <td style="width:15%;text-align: justify;">Spike in the power supply</td>
        <td style="width:20%;text-align: justify;">There should be no spikes in the power supply exceeding of 20% of nominal voltage.</td>
        <td style="width:25%">${clearance90}</td>
        <td style="width:25%">${remarks90}</td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">7.8</td>
        <td style="width:15%;text-align: justify;">Terminal blocks between ACM and CT rack</td>
        <td style="width:20%;text-align: justify;">Wago/Phoenix makes cage clamp type terminals to be used.</td>
        <td style="width:25%">${clearance91}</td>
        <td style="width:25%">${remarks91}</td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">7.9</td>
        <td style="width:15%;text-align: justify;">Cable from the evaluator to CT rack.</td>
        <td style="width:20%;text-align: justify;">24 cores shielded cable, single strand, 0.5 mm dia. shielded telecom cable to be used. Shield of the cable should be earthed.</td>
        <td style="width:25%">${clearance92}</td>
        <td style="width:25%">${remarks92}</td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">7.10</td>
        <td style="width:15%;text-align: justify;">Placement of overvoltage protection module. (D Class)</td>
        <td style="width:20%;text-align: justify;">Should be fitted between ACM 200 Module and Detection Point Conductors.</td>
        <td style="width:25%">${clearance93}</td>
        <td style="width:25%">${remarks93}</td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">7.11</td>
        <td style="width:15%;text-align: justify;">Use of proper rated fuse inserts. (Fuse rating for DP = 200mA, for Vital relay/ track = 1.6A)</td>
        <td style="width:20%;text-align: justify;">Don’t use fuse of higher rating than specified</td>
        <td style="width:25%">${clearance94}</td>
        <td style="width:25%">${remarks94}</td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">7.12</td>
        <td colspan="4" style="width:15%;text-align: justify;"><b>Proving of Back Contact of AXTPR Relay (K50 Type 5F/3B) in Interlocking circuits.</b></td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">Scenario 1</td>
        <td style="width:15%;text-align: justify;">Interlocking circuits with Metal to Metal and Metal to Carbon relays</td>
        <td style="width:20%;text-align: justify;">Back contact of AXTPR must be proved in circuits which positively check that the track was occupied. (Like sub route release circuit)</td>
        <td style="width:25%">${clearance95}</td>
        <td style="width:25%">${remarks95}</td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">Scenario 2</td>
        <td style="width:15%;text-align: justify;">Electronic Interlocking</td>
        <td style="width:20%;text-align: justify;">Back contact of AXTPR must be read into EI using an input channel. The Bit monitoring the valid occupied status must be proved in logic which checks positively that the track was occupied. (Like sub route release circuit)</td>
        <td style="width:25%">${clearance96}</td>
        <td style="width:25%">${remarks96}</td>
    </tr>
    <tr>
        <td colspan="5" style="width:2%;text-align: justify;">Note: The proving of back contact of AXTPR in the interlocking circuits to be ensured by zonal railways while designing interlocking circuits</td>
    </tr>
</table>
</div>
<div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>

                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                    
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>
        <div class="page-break"></div>
        <table id="table1">
        <tr>
            <th>Page 10 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr>
            <td colspan="4" style="text-align:center;">
                Title: Pre-commissioning Check List of Multi Section Digital Axle Counter MSDAC Model: ACM 200<br>
                (Another variant) and Track side Equipment ZP D 43 of M/s Siemens India Ltd., Mumbai.
            </td>
        </tr>
    </table>
    <br>
    <p  style="padding-left: 75px;"><b>Power supply and switch on the power supply. 
    </b></p>
    <div class="image-container">
        <img src="/image2" alt="Description of the image" class="responsive-image">

    </div>
    <div class="container">
        <div class="signature-container left">
            <div class="signature">
                <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                <input type="file" id="signatureImage1" accept="image/*" required>

                <p>Signature of Siemens Representative:</p>
                <p>With Name, Designation & Date</p>
            </div>
        </div>
        <div class="signature-container right">
            <div class="rsign">
                <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                
                <p>Signature of Railway Representative:</p>
                <p>With Name, Designation & Date</p>
            </div>
        </div>
    </div>
    

<div class="page-break"></div>
        <table id="table1">
        <tr>
            <th>Page 11 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr><td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
            
        </tr>
 </table>
    <div class="table-container">
       <table>
       <tr>
        <td style="width:2%;text-align:center"><b>Sl.No.</b></td>
                <td style="width:15%;text-align:center"><b>Item</b></td>
                <td style="width:20%;text-align:center"><b>Required  
                    </b></td>
                <td style="width:25%;text-align:center"><b>Measured/ 
                    Observed 
                    </b></td>
                <td style="width:25%;text-align:center"><b>Remarks 
                    (Ok/Not ok)</b> </td>
            </tr>
        <tr>
            <td style="width:2%;text-align: justify;">8.1</td>   
            <td style="width:15%;text-align: justify;">Placement and 
                connection of ACM 
                modules, power supply 
                and Ethernet switch. 
                </td>
            <td style="width:20%;text-align: justify;">As illustrated in the figure 1 given 
                above. 
                </td>
                <td>${pla111}</td>
                <td>${remarks111}</td>
                
        </tr>
        <tr>
        
            <td colspan="5"style="width:15%;text-align: justify;"><b>8.2 Saving and loading of configuration data </b>

            </td>
        
    </tr>

    <tr>
        <td style="width:2%;text-align: justify;">8.2.1</td>   
        <td style="width:15%;text-align: justify;">The configuration data 
            of specific site. 
            
            </td>
        <td style="width:20%;text-align: justify;">The configuration data specified 
            using the integrated web site is 
            saved in a readable file on the 
            hard disk of a standard PC, or 
            loaded immediately onto the 
            configuring connector (ID plug) of 
            the ACM.
            </td>
            <td>${pla112}</td>
            <td>
            ${remarks112}
            </td>
            
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">8.2.2</td>   
        <td style="width:15%;text-align: justify;">Alteration in the 
            configuration data of ID 
            Plug
            </td>
        <td style="width:20%;text-align: justify;">Don’t change configuration data 
            via web page without directives 
            from Siemens Representative. 
            </td>
            <td>${pla113}</td>
            <td>
            ${remarks114}
            </td>
            
    </tr>

    <tr>
        
        <td colspan="5"style="width:15%;text-align: justify;"><b>8.3 Power supply Module </b>

        </td>
    
</tr>
<tr>
    <td style="width:2%;text-align: justify;">8.3.1</td>   
    <td style="width:15%;text-align: justify;">Power Supply 

        </td>
    <td style="width:20%;text-align: justify;">The Green LED 24Vdc on 
        power supply module lit 
        after switch on the power 
        supply.
        </td>
        <td>${pla115}</td>
        <td>
        ${remarks115}
        </td>
        
</tr>
<tr>
    <td style="width:2%;text-align: justify;">8.3.2</td>   
    <td style="width:15%;text-align: justify;">Power Supply 
        </td>
    <td style="width:20%;text-align: justify;">Local/ External 
        IPS/Battery Charger 
        </td>
        <td>${pla116}</td>
        <td>
        ${remarks116}
        </td>
        
</tr>
<tr>
    <td style="width:2%;text-align: justify;">8.3.3</td>   
    <td style="width:15%;text-align: justify;">Input supply with 
        a. IPS Supply 
         Ripple Contents 
        or 
        b. Battery Charger 
         Ripple contents
        </td>
    <td style="width:20%;text-align: justify;">Input voltage : 24 VDC 
        50mVAC (peak - peak) / 
        10 mV rms 
        50 mVAC (peak - peak) / 
        10 mV rms 
         
        </td>
        <td>${pla117}</td>
        <td>
        ${remarks117}
        </td>
        
</tr>


<tr>
    <td style="width:2%;text-align: justify;">8.3.4</td>   
    <td style="width:15%;text-align: justify;">Power Supply 
        Equipped with Battery charger 
        (Local/External Source ) 
        
        </td>
    <td style="width:20%;text-align: justify;">
        
        Suitable for Axle counter 
        use
         
        </td>
        <td>${pla118}</td>
        <td>
        ${remarks118}
        </td>
        
</tr>
<tr>
    <td style="width:2%;text-align: justify;">8.3.5</td>   
    <td style="width:15%;text-align: justify;">Input supply 
        Battery Charger 
        (i) Input Voltage 
        (ii) I/P of Charger should be 
        off for 15 min
        </td>
    <td style="width:20%;text-align: justify;">Battery Voltage
         
        </td>
        <td>${pla119}</td>
        <td>
        ${remarks119}
        </td>
        
</tr>
</table>
<div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>

                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                    
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>


<div class="page-break"></div>
        <table id="table1">
            <tr>
                <th>Page 12 of 34</th>
                <th>Document no.:SI-G-7.1-0624</th>
                <th>Version:2.0</th>
                <th>Date of issue:19.11.2019</th>
            </tr>
            <tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
                and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
               
            </tr>
        </table>
        <table>
        <br>
        <div class="table-container">
        <tr>
            <td colspan="5">8.4 Indications on the ACM modules after pressing ‘RST’ button for 2 sec.
            </td>
           
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.1</b></td>
            <td style="width:15%;text-align: center"> “OK” LED (Green) </td>
            <td style="width:20%;text-align: center">Steady Green light : ACM is OK</td>
            <td>${ok}</td>
                    <td>${remarks23}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.2</b></td>
            <td style="width:15%;text-align: center"> “TVDS1” LED </td>
            <td style="width:20%;text-align: center">Steady Red light : Due to Section
                ‘OCCUPIED’ </td>
                <td>${s1}</td>
                <td>${remarks24}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.3</b></td>
            <td style="width:15%;text-align: center"> “TVDS2” LED </td>
            <td style="width:20%;text-align: center">Steady Red light : Due to Section
                ‘OCCUPIED’  </td>
                <td>${s2}</td>
                <td>${remarks25}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.4</b></td>
            <td style="width:15%;text-align: center">  “DS1.1” LED  </td>
            <td style="width:20%;text-align: center">Steady Green light : Pulse free
            </td>
               
             
            <td>${s3}</td>
                <td>${remarks26}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.5</b></td>
            <td style="width:15%;text-align: center">  “DS1.2” LED  </td>
            <td style="width:20%;text-align: center">Steady Green light : Pulse free
            </td>
               
               
            <td>${s4}</td>
            <td>${remarks27}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.6</b></td>
            <td style="width:15%;text-align: center">  “DS2.1” LED  </td>
            <td style="width:20%;text-align: center">Steady Green light : Pulse free
            </td>
               
            <td>${s5}</td>
            <td>${remarks28}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.7</b></td>
            <td style="width:15%;text-align: center">  “DS1.1” LED  </td>
            <td style="width:20%;text-align: center">Steady Green light : Pulse free
            </td>
               
               
            <td>${s6}</td>
            <td>${remarks29}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.8</b></td>
            <td style="width:15%;text-align: center">  “RR1” LED</td>
            <td style="width:20%;text-align: center">Off condition
            </td>
               
               
            <td>${s7}</td>
            <td>${remarks30}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.9</b></td>
            <td style="width:15%;text-align: center">  “RR2” LED</td>
            <td style="width:20%;text-align: center">Off condition
            </td>
               
               
            <td>${s8}</td>
                <td>${remarks31}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.10</b></td>
            <td style="width:15%;text-align: center">  "COM" LED</td>
            <td style="width:20%;text-align: center">Steady Green light: All fail safe
                connections OK.
               
            </td>
               
               
            <td>${s9}</td>
                <td>${remarks32}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.4.10</b></td>
            <td style="width:15%;text-align: center">  "COM" LED</td>
            <td style="width:20%;text-align: center">Steady Green light: All fail safe
                connections OK.
               
            </td>
               
               
            <td>${s10}</td>
            <td>${remarks33}</td>
        </tr>
        <tr>
            <td colspan="5">8.5 Indications on the ACM modules after calibration process by pressing ‘CAL’ on ACM module for 3 Sec.
            </td>
           
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.5.1</b></td>
            <td style="width:15%;text-align: center">   “CAL” LED </td>
            <td style="width:20%;text-align: center">Steady Green light : Calibration is
                OK.
               
            </td>
               
               
            <td>${s11}</td>
            <td>${remarks34}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.5.2</b></td>
            <td style="width:15%;text-align: center">   “DIR 1” LED </td>
            <td style="width:20%;text-align: center">Off condition after calibration  </td>
               
            <td>${s12}</td>
            <td>${remarks35}</td>
        </tr>
        <tr >
            <td style="width:2%;text-align: center">8.5.3</b></td>
            <td style="width:15%;text-align: center">   “DIR 2” LED </td>
            <td style="width:20%;text-align: center">Off condition after calibration
   
               
         
               
               
            <td>${s13}</td>
            <td>${remarks36}</td>
        </tr>
   
       </div>
   
    </table>
    <div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>

                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                    
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>
<div class="page-break"></div>


<table id="table1">
        <tr>
            <th>Page 13 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr><td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
            
        </tr>
    </table>
     <p style="padding-left: 50px;text-decoration: underline;"><b>9. Reset Box/Panel : </b><br></p>
    <p style="padding-left: 100px;">  1. Reset panel must be provided if no. of track circuits will be more than > 4 else only reset boxes 
        may be provided.  </p>
    <p style="padding-left: 100px;">2. Reset Box is used for 1 TC, In case of more than 1 TC, Reset Panel is used</p> 
    <div class="table-container">
       <table>
       <tr>
        <td style="width:2%;text-align:center"><b>Sl.No.</b></td>
                <td style="width:15%;text-align:center"><b>Item</b></td>
                
                <td style="width:25%;text-align:center"><b>Measured/ 
                    Observed 
                    </b></td>
                <td style="width:25%;text-align:center"><b>Remarks 
                    (Ok/Not ok)</b> </td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">9.1</td>   
                <td style="width:15%;text-align: justify;">Reset Box contains : 
                    1) SM's key 
                    2) Reset Push Button 
                    3) Power ON LED (3mm yellow) 
                    4) Preparatory Reset LED (3mm Green). 
                    5) Line verification LED (3mm Yellow.) 
                    6) Section Clear LED (10mm Green.) 
                    7) Section Occupied (10 mm Red) 
                    8) Six digit non-resettable type Counter. 
                    </td>
                
                    <td>${remarks131}
                </td>
                    <td>
                    ${remarks132}
                    </td>
                    
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">9.2</td>   
                <td style="width:15%;text-align: justify;">Reset function 
                    1) Reset not possible when axle counter 
                    section is clear and healthy. 
                    2) Reset not possible when axle counter 
                    section is in preparatory reset mode.  
                    </td>
               
                    <td>${remarks133}</td>
                    <td>
                    ${remarks134}
                    </td>
                    
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">9.3</td>   
                <td style="width:15%;text-align: justify;">Functionality of Reset box/Reset Panel 
                    A) I/P voltage shall be 24VDC +20% to -10% 
                    at NON-SIEMENS installations. 
                    B) I/P voltage shall be 60VDC +20% to -10% 
                    at SIEMENS installations.
                    </td>
               
                    <td style="width:15%;text-align: justify;">Should be operational 
                        When I/P supply of 24 
                       V dc 
                       (i) 21.6 (Min) & 
                       (ii)28.8 Volts (Max) 
                       When I/P supply of 60 
                       V dc 
                       (i) 54 (Min) & 
                       (ii) 72.0 Volts (Max)
                        </td>
                    <td>
                    ${remarks135}
                    </td>
                    
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">9.4</td>   
                <td style="width:15%;text-align: justify;">Mounting of the Reset Box / Reset Panel
                    </td>
               
                    <td style="width:15%;text-align: justify;">Should be properly 
                        mounted
                    </td>
                    <td>
                    ${remarks136}
                    </td>
                    
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">9.5</td>   
                <td style="width:15%;text-align: justify;">Wiring of reset boxes & reset panel.
                    </td>
                
                    <td style="width:15%;text-align: justify;">To be wired in such a 
                        manners that the 
                        conductors neither 
                        remain exposed nor 
                        touch the cable 
                        insulation
                    </td>
                    <td>
                    ${remarks137}
                    </td>
                    
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">9.6</td>   
                <td style="width:15%;text-align: justify;">Cable from reset panel to CT rack in relay room.
                    </td>
                
                    <td style="width:15%;text-align: justify;">Cable used shall be 
                        24cores, single 
                        strand.0.5 mm.dia. 
                        Shielded telecom 
                        cable. 
                        
                    </td>
                    <td>
                    ${remarks138}
                    </td>
                    
            </tr>

        </table>

        <div class="container">
        <div class="signature-container left">
            <div class="signature">
                <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                <input type="file" id="signatureImage1" accept="image/*" required>

                <p>Signature of Siemens Representative:</p>
                <p>With Name, Designation & Date</p>
            </div>
        </div>
        <div class="signature-container right">
            <div class="rsign">
                <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                
                <p>Signature of Railway Representative:</p>
                <p>With Name, Designation & Date</p>
            </div>
        </div>
    </div>

<div class="page-break"></div>
<table id="table1">
<tr>
    <th>Page 14 of 34</th>
    <th>Document no.:SI-G-7.1-0624</th>
    <th>Version:2.0</th>
    <th>Date of issue:19.11.2019</th>
</tr>
<tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
    and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
   
</tr>
</table>

<p style="padding-left: 70px;"><b>10. <u>Indoor (Diagnostic PC):</u></b></p>
<p style="padding-left: 100px;">
1. It is mandatory to install one diagnostic PC at per station. <br>
2. All the parameters of the ACM 200 module /track section should be visualized and verified by
Diagnostic Web Page.
</p>

<br>
<table>
<tr >
    <td style="width:2%;text-align: center"><b>Sr.<br>No.</b></td>
    <td style="width:15%;text-align: center"><b>Item</b></td>
    <td style="width:20%;text-align: center"><b>Required</b></td>
    <td style="width:25%;text-align: center"><b>Measured<br>/Observed</b> </td>
    <td style="width:25%;text-align: center"><b>Remarks<br>(Ok/Not ok)</b></td>
</tr>

    <tr>
        <td>10.1</td>
        <td style="text-align: justify;">Installation of the <br>
            diagnostic PC.
           
            </td>
        <td>iagnostic PC to be installed <br>
            (preferably in the relay room.)
                     </td>  
                    <td>${a1}</td>
            <td>${re1}</td>
    </tr>
    <tr>
        <td>10.2</td>
        <td style="text-align: justify;">
            Length of the Ethernet
            cable upto Ethernet switch
            from PC.
           
        </td>
        <td style="text-align: justify;">Length of the Ethernet cable should be
            approx.100 meters from PC.
            </td>  
            <td>${a2}</td>
            <td>${re2}</td>
    </tr>
    <tr>
        <td>10.3</td>
        <td style="text-align: justify;"> Connection of the PC to an
            Ethernet network via which
            a connection to the ACM.
        </td>
        <td style="text-align: justify;">The Ethernet cable from PC should be
            connected properly to the Ethernet
            switch where ACM modules are also
            connected.
             </td>  
             <td>${a3}</td>
             <td>${re3}</td>
    </tr>
    <tr>
        <td>10.4</td>
        <td style="text-align: justify;"> Start an internet browser
            (Internet Explorer – 7/8/9,
            or Mozilla Firefox – 3/4)
            </td>  
        <td style="text-align: justify;">Enter the IP address in the browser of
            the particular ACM and check the
            configuration and diagnostic of the
            same.  </td>
            <td>${a4}</td>
            <td>${re4}</td>
    </tr>
 </table>
 <p style="padding-left: 70px;"><b>Note:</b> All the parameters of the ACM 200 module track section should be visualized and verified by Diagnostic
   <br> Web Page
    </p><br>
    <p style="padding-left: 70px;"><b>11. <u>Checksum Verification:
    </u></b></p>
    <p style="padding-left: 100px;">
        Please verify the Checksum using Binary file of ACM 200 Software on diagnostic Web Page.
        <br>(Refer Annexure I)
       
    </p>

<table>
<tr >
    <td style="width:2%;text-align: center"><b>Sr.<br>No.</b></td>
    <td style="width:15%;text-align: center"><b>Item</b></td>
    <td style="width:20%;text-align: center"><b>Required</b></td>
    <td style="width:15%;text-align: center"><b>Measured<br>/Observed</b> </td>
    <td style="width:15%;text-align: center"><b>Remarks<br>(Ok/Not ok)</b></td>
</tr>

    <tr>
        <td>11.1</td>
        <td style="text-align: justify;">ACM 200 Software <br>
            MD4(BC_ASW)
            </td>
        <td>C6 D3 0B 0C 32 E9 C7 3E AA 5C <br>
            26 21 43 50 4A EE
                     </td>  
                     <td>${a5}</td>
            <td>${re5}</td>
    </tr>
    <tr>
        <td>11.2</td>
        <td style="text-align: justify;">
            IO Software Channel A
            MD4(PO_ASW)
           
        </td>
        <td style="text-align: justify;">22 70 E3 56 49 DF 10 CE F6 47 <br>
            1A 18 2A CF 7A D3
           
            </td>  
            <td>${a6}</td>
            <td>${re6}</td>
    </tr>
    <tr>
        <td>11.3</td>
        <td style="text-align: justify;">  Ethernet Software
            MD4(FM_CE)
        </td>
        <td style="text-align: justify;">ED A0 51 08 DB D6 F8 11 3D A3 <br>
            1E 7E 79 A7 5E 71
             </td>  
             <td>${a7}</td>
             <td>${re7}</td>
    </tr>
    <tr>
        <td>11.4</td>
        <td style="text-align: justify;">  Web Page
            MD4(Website)
             
            </td>  
        <td style="text-align: justify;">B2 43 44 F9 85 2C 4E ED 76 F8 <br>
            C1 B4 CE 1A DA CA  </td>
            <td>${a8}</td>
             <td>${re8}</td>
    </tr>
 </table>
 <div class="container">
 <div class="signature-container left">
     <div class="signature">
         <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
         <input type="file" id="signatureImage1" accept="image/*" required>

         <p>Signature of Siemens Representative:</p>
         <p>With Name, Designation & Date</p>
     </div>
 </div>
 <div class="signature-container right">
     <div class="rsign">
         <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

         
         <p>Signature of Railway Representative:</p>
         <p>With Name, Designation & Date</p>
     </div>
 </div>
</div>
<div class="page-break"></div>

<table id="table1">
<tr>
    <th>Page 15 of 34</th>
    <th>Document no.:SI-G-7.1-0624</th>
    <th>Version:2.0</th>
    <th>Date of issue:19.11.2019</th>
</tr>
<tr><td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
    and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
    
</tr>
</table>
<p style="padding-left: 65px;text-decoration: underline;"><b>12 .Test format for testing of QUAD cable:
</b></p>

<div class="table-container">
<table>
<tr>
<td style="width:2%;text-align:center"><b>Sl.No.</b></td>
        <td style="width:15%;text-align:center"><b>Item</b></td>
        <td style="width:20%;text-align:center"><b>Required</b></td>
        <td style="width:25%;text-align:center"><b>Measured/ 
            Observed 
            </b></td>
        <td style="width:25%;text-align:center"><b>Remarks 
            (Ok/Not ok)</b> </td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">12.1</td>   
        <td style="width:15%;text-align: justify;">Quad cable length 
            between ACM modules 
            (indoor) & rail contacts. 
            </td>
            <td style="width:20%;text-align: justify;">Should be < 4.5 Km.

                </td>
        
            <td>${remarks151}
        </td>
            <td>
            ${remarks152}
            </td>
            
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">12.2</td>   
        <td style="width:15%;text-align: justify;">Communication 
            media/type of cable
            </td>
            <td style="width:20%;text-align: justify;">Only Star Quad cable is to be used 
                between field units and ACM 
                modules. 
                No signaling cable is to be used 
                either in totality or in parts. 

                </td>
        
            <td>${remarks153}
        </td>
            <td>
                ${remarks154}
            </td>
            
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">12.3</td>   
        <td style="width:15%;text-align: justify;">Usage of pair
            </td>
            <td style="width:20%;text-align: justify;">Proper pair of wires to be used for 
                connectivity. Refer to the Annexure 
                A for the QUAD cable

                </td>
        
            <td>${remarks155}
        </td>
            <td>
            ${remarks156}
            </td>
            
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">12.4</td>   
        <td style="width:15%;text-align: justify;">Duplication of wires 
            (connecting conductors in 
            parallel).
            </td>
            <td style="width:20%;text-align: justify;">No wires must be connected in 
                parallel to reduce conductor 
                resistance. 

                </td>
        
            <td>${remarks157}
            </select>
        </td>
            <td>
            ${remarks158}
            </td>
            
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">12.5</td>   
        <td style="width:15%;text-align: justify;">Insulation resistance of 
            QUAD cable. 
            
            </td>
            <td style="width:20%;text-align: justify;">This shall be > 10 M Ώ. 


                </td>
        
            <td>${remarks159}
        </td>
            <td>
            ${remarks1500}
            </td>
            
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">12.6</td>   
        <td style="width:15%;text-align: justify;">Loop resistance of 
            designated pair.
            </td>
            <td style="width:20%;text-align: justify;">Not to exceed 56 ohm/Km for QUAD 
                cable at 20OC. 
                Refer to the Annexure B for the 
                correction factor. 

                </td>
        
            <td>${remarks1501}
        </td>
            <td>
            ${remarks1502}
            </td>
            
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">12.7</td>   
        <td style="width:15%;text-align: justify;">Attenuation loss 
            measured at 2KHz.
            </td>
            <td style="width:20%;text-align: justify;">This shall be not greater than 30dB 
                for the full length of the cable used. 
                

                </td>
        
            <td>${remarks1503}
        </td>
            <td>
            ${remarks1504}
            </td>
            
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">12.8</td>   
        <td style="width:15%;text-align: justify;">Near End Cross Talk 
            (NEXT) 
             
            </td>
            <td style="width:20%;text-align: justify;">Shall be better than 55dB for QUAD 
                cable. 

                </td>
        
            <td>${remarks1505}
        </td>
            <td>
            ${remarks1506}
            </td>
            
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">12.9</td>   
        <td style="width:15%;text-align: justify;">Far End Cross Talk (FEXT)
            </td>
            <td style="width:20%;text-align: justify;">Shall be better than 55dB for QUAD 
                cable. 
                

                </td>
        
            <td>${remarks1507}
        </td>
            <td>
            ${remarks1508}
            </td>
            
    </tr>

</table>

<div class="container">
<div class="signature-container left">
    <div class="signature">
        <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
        <input type="file" id="signatureImage1" accept="image/*" required>

        <p>Signature of Siemens Representative:</p>
        <p>With Name, Designation & Date</p>
    </div>
</div>
<div class="signature-container right">
    <div class="rsign">
        <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

        
        <p>Signature of Railway Representative:</p>
        <p>With Name, Designation & Date</p>
    </div>
</div>
</div>



<div class="page-break"></div>
<table id="table1">
        <tr>
            <th>Page 16 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
           
        </tr>
    </table>
    <br>
    <table>
        <tr >
            <td style="width:2%;text-align: center">12.10</b></td>
            <td style="width:15%;text-align: center">Continuity of cable
                armour
                </td>
            <td style="width:20%;text-align: center">Continuity of the armourshould be
                ensured and armour of the Cable
                must be earthed.
                Wiring practices should be in
                accordance to TAN 6001 dt 04.10.2011
                See Annexure –H
                ></td>
                <td>${a9}</td>
                <td>${re9}</td>
        </tr>
        <tr>
            <td>12.11</td>
            <td style="text-align: justify;">
                Earthing of QUAD cable.
               
            </td>
            <td style="text-align: justify;">Shall be < 1Ώ
                </td>  
                <td>${a10}</td>
             <td>${re10}</td>
        </tr>
        <tr>
            <td>12.12</td>
            <td style="text-align: justify;">
                Checking of connection of
                quad cable conductors
                from ACM to Detection
                points
               
            </td>
            <td style="text-align: justify;">Ensure that there is not any loose
                connection in conductors of quad
                cable at location box and CT rack
                from ACM to DP.
                </td>  
                <td>${a11}</td>
                <td>${re11}</td>
        </tr>
    </table>
    <br>
    <p style="padding-left: 70px;"><b>Note:</b> <u>Procedure for Test Attenuation Loss:  </u>
         </p>
         <p style="padding-left: 100px;padding-top: -5px;">The output/input impedance of signal generator/dB meter shall be 600Ώ </p>
       
         <p style="padding-left: 70px;"> <u>Procedure for test Near End Cross Talk:
        </u>
         </p>
         <p style="padding-left: 100px;padding-top: -5px;">Test tone of 150 kHz to be fed in the adjacent pair of the same quad and NEXT to be measured at the
            <br>same end on the pair of the same quad.</p>
            <p style="padding-left: 70px;"> <u>Procedure for test Far End Cross Talk: </u>
             </p>
             <p style="padding-left: 100px;padding-top: -5px;">Test tone of 150 kHz to be fed in the adjacent pair of the same quad and NEXT to be measured at the
               <br> far end on the pair of the same quad</p>
               <div class="container">
                <div class="signature-container left">
                    <div class="signature">
                        <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                        <input type="file" id="signatureImage1" accept="image/*" required>
   
                        <p>Signature of Siemens Representative:</p>
                        <p>With Name, Designation & Date</p>
                    </div>
                </div>
                <div class="signature-container right">
                    <div class="rsign">
                        <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>
   
                       
                        <p>Signature of Railway Representative:</p>
                        <p>With Name, Designation & Date</p>
                    </div>
                </div>
            </div>
   
            <div class="page-break"></div>

            
    <table id="table1">
    <tr>
        <th>Page 17 of 34</th>
        <th>Document no.:SI-G-7.1-0624</th>
        <th>Version:2.0</th>
        <th>Date of issue:19.11.2019</th>
    </tr>
    <tr><td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
        and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
        
    </tr>
   
</table>
<p style="padding-left: 65px;text-decoration: underline;"><b>12 .Test format for testing of QUAD cable:
</b></p>
<div class="table-container">
    
    <table>
        <tr>
            <td colspan="3" style="text-align:center;"><b>MSDAC - Siemens Make, Model - ACM 200 Ver.-2.0</b> 
            </td>
        </tr>
        <tr>
            <td style="width:5%">Sr. No</td>
            <td style="width:25%">Designation</td>
            <td style="width:25%">Manufacturer Part Number</td> 
        </tr>
        <tr>
            <td>1.</td>
            <td>Clear guard ACM 200 
                Axle Counting System</td>
            <td>S25552-B343-A200-2* </td>
            
        </tr>
        <tr>
            <td>2.</td>
            <td>ID plug</td>
            <td>S25552-B343-A400-* </td>
            
        </tr>
        <tr>
            <td>3.</td>
            <td>Cable 2X connector ACM200</td>
            <td>V25132-M1416-A5-*</td>
            
        </tr>
        <tr>
            <td>4.</td>
            <td>Over Voltage protection and filter - Indoor</td>
            <td>V25552-B343-C1*</td>
            
        </tr>
        <tr>
            <td rowspan="2">5.</td>
            <td>Clear guard ACM 200 
                Axle Counting System</td>
            <td>S25552-B343-A200-2* </td>
        </tr>
        <tr>
            <td>Clear guard ACM 200 
                Axle Counting System</td>
            <td>S25552-B343-A200-2* </td>
        </tr>
        <tr>
            <td colspan="3" style="text-align:center;"><b>Siemens part numbers for Trackside connection Box and Wheel Detection Equipment Module.</b> 
            </td>
        </tr>
        <tr>
            <td rowspan="2">6.</td>
            <td>Trackside Connection Box including Wheel detection Equipment 
                Module standard usage with over voltage protection.</td>
            <td>S25552-T4190-A3- *</td>
            </tr>
            <tr>
            <td>Wheel detection Equipment Module, Standard usage.</td>
            <td>S25552-B159-A3- *</td>
        </tr>
        <tr>
            <td rowspan="2">7.</td>
            <td>Trackside Connection Box including Wheel detection Equipment 
                Module Double usage with over voltage protection</td>
            <td>S25552-T4190-A2-*</td>
            </tr>
            <tr>
            <td>Wheel detection Equipment Module, Double usage.</td>
            <td>S25552-B159-A2-*</td>
        </tr>
        <tr>
            <td rowspan="2">8.</td>
            <td>Trackside Connection Box including Wheel detection Equipment 
                Module External supply and Double usage with over voltage 
                protection.</td>
            <td>S25552-T4190-A1-* 
            </td>
            </tr>
            <tr>
            <td>Wheel detection Equipment Module, External supply and Double 
                usage</td>
            <td>S25552-B159-A1-* 
            </td>
        </tr>
        <tr>
            <td>9.</td>
            <td>Overvoltage protection module - Outdoor</td>
            <td>S25552-B734-B1-* 
            </td>
            
        </tr>
        <tr>
            <td rowspan="2">10.</td>
            <td>ZP D 43 Coding Plug</td>
            <td>S25552-B160-A208-* 
            </td>
            </tr>
            <tr>
            <td>ZP D 43 PCB of Coding Plug</td>
            <td>W25552-B160-A208-*</td>
        </tr>
        <tr>
            <td colspan="3" style="text-align:center;"><b>Siemens part numbers for Track device and its components.</b> 
            </td>
        </tr>
        <tr>
            <td rowspan="7">11.</td>
            <td>Double Wheel Detector (Complete) 
                Approx. 5mtr. Cable length</td>
            <td>S25552-M43-A1-* 
            </td>
            </tr>
            <tr>
            <td>Double Wheel Detector (Complete) 
                Approx. 10mtr. Cable length</td>
            <td>S25552-M43-A6-* </td>
            </tr>
            <tr>
            <td>Double Wheel Detector (Complete) 
                Approx. 15mtr. Cable length</td>
            <td>S25552-M43-A8-* 
            </td>
        
            <tr>
            <tr>
            <td>Transmitter (5mtr. Cable Length) </td>
            <td>V25552-M43-A2-*  </td>
            </tr>
            <tr>
            <td>Transmitter (10mtr. Cable Length) </td>
            <td>V25552-M43-A4-* </td>
            </tr>
           <tr>
        
            <td>Transmitter (15mtr. Cable Length) </td>
                <td>V25552-M43-A6-* </td>
            </tr>
        </tr>

        <tr>
            <td rowspan="3">12.</td>
            <td>Receiver (5mtr. Cable Length)</td>
            <td>V25552-M43-A3-*</td>
            </tr>
            <tr>
            <td>Receiver (10mtr. Cable Length)</td>
            <td>V25552-M43-A5-*</td>
            </tr>
            <tr>
                <td>Receiver (15mtr. Cable Length)</td>
                <td>V25552-M43-A7-*</td>
            </tr>
        </tr>
       
    </table>
    <div class="container">
    <div class="signature-container left">
        <div class="signature">
            <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
            <input type="file" id="signatureImage1" accept="image/*" required>

            <p>Signature of Siemens Representative:</p>
            <p>With Name, Designation & Date</p>
        </div>
    </div>
    <div class="signature-container right">
        <div class="rsign">
            <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

            
            <p>Signature of Railway Representative:</p>
            <p>With Name, Designation & Date</p>
        </div>
    </div>
</div>


            <div class="page-break"></div>
            <table id="table1">
            <tr>
                <th>Page 18 of 34</th>
                <th>Document no.:SI-G-7.1-0624</th>
                <th>Version:2.0</th>
                <th>Date of issue:19.11.2019</th>
            </tr>
            <tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
                and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
               
            </tr>
        </table>
        <br>
        <table >
            <tr><td colspan="3">Transformers</td></tr>
            <tr>
                <td>13</td>
              <td>Broadband Transformer</td>
              <td>V25319-Z1-A9-*
            </td>
            </tr>
            <tr>
                <td>14</td>
              <td>Isolation Transformer </td>
              <td>V25319-Z1-A14-*
            </td>
            </tr>
            <tr><td colspan="3">Resetting Arrangement</td></tr>
            <tr>
                <td>15</td>
              <td>SM Room Reset Card (SMR)</td>
              <td>S25552-B1000-A1-*
            </td>
            </tr>
            <tr>
                <td>16</td>
              <td>SM - Key Card</td>
              <td>S25552-B1000-A2-*
            </td>
            </tr>
            <tr>
                <td>17</td>
              <td>Axle Counting Card (ACR) </td>
              <td>S25552-B1000-A3-*  
            </td>
            </tr>
            <tr>
                <td>18</td>
              <td>Line Verification Box</td>
              <td>V25319-Z1000-A1-*  
            </td>
            </tr>
            <tr>
                <td>19</td>
              <td>GUI based Webdiagnosis : ACM200 </td>
              <td>Version 1. **
     
            </td>
            </tr>
    </table>
    <br>
    <table style="width: 50%;margin: 0 auto;">
        <tr><td >*</td>
        <td > <b>Indicates for product and manufacturing version no.</b>
        </td></tr>
        <tr><td>**</td>
            <td> <b> Mandatory with Axle counter system/Stn for monitoring the axle counter
                information. <br>
                Axle counter supply (24 Volt supply) is required for driving the PC. .</b>
            </td></tr>
    </table>
    <p style="padding-left: 70px;"><b>14. <U> Log Sheet for Commissioning/Maintenance
    </U></b>  
         </p>
         <p style="padding-left: 129px;">
         <u>Log sheet for ZP D 43 (Outdoor Equipment) Commissioning/Maintenance </u></p>
         <table>
            <tr style="align-content: center;"><td colspan="8">Trackside Connection Box ZP D 43 Serial No</td>.:- </tr>
            <tr>
                <td style="width: 12px;text-align: justify"></td>
                <td style="width: 12px;text-align: justify">Wheel detection
                    Equipment
                    Module</td>
                    <td style="width: 12px;text-align: justify">Over Voltage
                        Protection
                        Module</td>
                        <td style="width: 12px;text-align: justify">Trackside
                            Connection
                            Box</td>
                            <td style="width: 12px;text-align: justify">Tx of track
                                device
                                </td>
                                <td style="width: 12px;text-align: justify">Rx of track
                                    device</td>
                                    <td style="width: 12px;text-align: justify;"></td>
                                    <td style="width: 12px;text-align: justify"></td>
            </tr><tr>
                <td>Serial No</td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Parameter</td>
                <td>Permissible
                    Range
                    </td>
                <td>Value at the
                    Time of
                    commissioning</td>
                <td>Value
                    Recorded on
                    ………………
                    (DD/MM/YY) </td>
                <td>Value
                    Recorded on
                    ………………
                    (DD/MM/YY)</td>
                <td>Value
                    Recorded on
                    ………………
                    (DD/MM/YY) </td>
                <td>Value
                    Recorded on
                    ………………
                    (DD/MM/YY) </td>
                <td>Value
                    Recorded on
                    ………………
                    (DD/MM/YY) </td>
            </tr>
            <tr>
                <td>U60 (NS) </td>
                <td>30 to 72VDC
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>U60 (FS) </td>
                <td> 30 to 72VDC
                    26 to 50VAC
                   
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
            <tr>
                <td>Fs  </td>
                <td> 41.5 to 44.5kHz
   
                   
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr><tr>
                <td>UE1  </td>
                <td>60 to 150mV
                   
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr><tr>
                <td>UE2  </td>
                <td> 60 to 150mV
                   
                </td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
                <td></td>
            </tr>
           
         </table>
         <div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>

                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                    
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>
 <div class="page-break"></div>
 <table id="table1">
 <tr>
     <th>Page 19 of 34</th>
     <th>Document no.:SI-G-7.1-0624</th>
     <th>Version:2.0</th>
     <th>Date of issue:19.11.2019</th>
 </tr>
 <tr><td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
     and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
     
 </tr>
</table>
<p style="padding-left: 65px;text-decoration: underline;"><b>12 .General: 

</b></p>

<div class="table-container">
<table>
<tr>
 <td style="width:2%;text-align:center"><b>Sl.No.</b></td>
         <td style="width:15%;text-align:center"><b>Item</b></td>
         <td style="width:20%;text-align:center"><b>Required</b></td>
         <td style="width:25%;text-align:center"><b>Measured/ 
             Observed 
             </b></td>
         <td style="width:25%;text-align:center"><b>Remarks 
             (Ok/Not ok)</b> </td>
     </tr>
     <tr>
         <td style="width:2%;text-align: justify;">15.1</td>   
         <td style="width:15%;text-align: justify;">Training 
             </td>
             <td style="width:20%;text-align: justify;">Railway personnel should be 
                 trained on the system prior to 
                 commissioning.

                 </td>
         
             <td>${remarks191}
         </td>
             <td>
             ${remarks192}
             </td>
             
     </tr>
     <tr>
         <td style="width:2%;text-align: justify;">15.2</td>   
         <td style="width:15%;text-align: justify;">Verification of working. 
             </td>
             <td style="width:20%;text-align: justify;">System should be monitored for 
                 72Hrs.for trouble free operation 
                 prior to commissioning. 
                 
                 </td>
         
             <td>${remarks193}
         </td>
             <td>
             ${remarks194}
             </td>
             
     </tr>
     <tr>
         <td style="width:2%;text-align: justify;">15.3</td>   
         <td style="width:15%;text-align: justify;">Verification of Trolley 
             movement 
             
             </td>
             <td style="width:20%;text-align: justify;">Prior to commissioning. 
                 Effect of various trolley wheels 
                 used in the section should be 
                 checked as per Annexure "C"

                 </td>
         
             <td>${remarks195}
         </td>
             <td>
             ${remarks196}
             </td>
             
     </tr>
     </table>
     

     <div class="container">
     <div class="signature-container left">
         <div class="signature">
             <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
             <input type="file" id="signatureImage1" accept="image/*" required>

             <p>Signature of Siemens Representative:</p>
             <p>With Name, Designation & Date</p>
         </div>
     </div>
     <div class="signature-container right">
         <div class="rsign">
             <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

             
             <p>Signature of Railway Representative:</p>
             <p>With Name, Designation & Date</p>
         </div>
     </div>
 </div>

    <div class="page-break"></div>
    <table id="table1">
    <tr>
        <th>Page 20 of 34</th>
        <th>Document no.:SI-G-7.1-0624</th>
        <th>Version:2.0</th>
        <th>Date of issue:19.11.2019</th>
    </tr>
    <tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
        and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
       
    </tr>
</table>
<br>
<p style="padding-left: 70px;"><b>16. <U> . DOs and DONTs:
</U></b>  
     </p>
     <p style="padding-left: 100px;">16.1 <u>Dos:</u></p>
<table>
    <tr>
        <td style="width: 5%;text-align: justify"><b>Sr. No. </b></td>
        <td style="width: 80%;text-align: justify"><b>Activity</b></td>
        <td style="width: 15%;text-align: justify"><b>OK/<br>
            Not OK </b></td>
    </tr>
    <tr>
        <td>16.1.1</td>
        <td>Check that all electrical parameters are within specified range. If not, perform the
            calibration.
            </td>
           
             <td>${re12}</td>
    </tr>
    <tr>
        <td>16.1.2 </td>
        <td>While using the axle counting system, the user manuals for “Safety –related
            Application Conditions for Operators” are to be observed.
           
            </td>
            <td>${re13}</td>
    </tr>
    <tr>
        <td>16.1.3 </td>
        <td>The Indoor equipment of the axle counting system shall be protected against
            unauthorized access.
           
            </td>
            <td>${re14}</td>
    </tr>
    <tr>
        <td>16.1.4 </td>
        <td>All the parameters of the ACM module track section should be visualised verified by
            diagnostic web page. Hence it is mandatory to install one diagnostic PC at per
            station
           
            </td>
            <td>${re15}</td>
    </tr>
    <tr>
        <td>16.1.5 </td>
        <td>Installation, calibration and functional testing shall only be performed with the tools
            prescribed and by qualified staff
            (Refer ZP 43 Operating and Service Manual).
           
            </td>
            <td>${re16}</td>
    </tr>
    <tr>
        <td>16.1.6 </td>
        <td>A star-quad signalling cable should be used. /
            as an alternative, a paired signalling cable also be used
           
            </td>
            <td>${re17}</td>
    </tr>
   
    <tr>
        <td>16.1.7</td>
        <td>Record the status of all LEDs before performing corrective maintenance. The failure
            record can be found in the Maintenance Instruction User Manual.
           
            </td>
            <td>${re18}</td>
    </tr>
    <tr>
        <td>16.1.8</td>
        <td>Check insulation resistance of connecting cable between evaluation computer and
            counting head (quad cable) at regular intervals, as it would cause failure of wheel
            detection equipment.
           
           
            </td>
            <td>${re19}</td>
    </tr>
    <tr>
        <td>16.1.9</td>
        <td>Ensure suitable ventilation in the equipment room for better reliability of axle
            counter system.
           
           
            </td>
            <td>${re20}</td>
    </tr>
    <tr>
        <td>16.1.10</td>
        <td>Check whether equipment room is well protected from dust, moisture and water
           
           
            </td>
            <td>${re21}</td>
    </tr>
    <tr>
        <td>16.1.11</td>
        <td>Cover all spare holes of housing for electronic junction box firmly with appropriate
            arrangement.
           
           
            </td>
            <td>${re22}</td>
    </tr>
    <tr>
        <td>16.1.12</td>
        <td>Provide silicon sealant around all cable entries in trackside connection box to prevent
            water entry when counting head is installed in flood areas.
           
           
            </td>
            <td>${re23}</td>
    </tr>

</table>
<div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>

                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                    
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>
<div class="page-break"></div>

<table id="table1">
<tr>
    <th>Page 21 of 34</th>
    <th>Document no.:SI-G-7.1-0624</th>
    <th>Version:2.0</th>
    <th>Date of issue:19.11.2019</th>
</tr>
<tr><td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
    and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
    
</tr>

</table>
<p style="padding-left: 65px;text-decoration: underline;"><b>16.2 DONTs :
</b></p>
<div class="table-container">

<table>
   
     <tr>
        <td style="width:5%"><b>SN:</b></td>
        <td style="width:25%"><b>Activity</b></td>
        <td style="width:25%"><b>Complied / Ensured 
        </b></td> 
    </tr>
    <tr>
        <td>16.2.1</td>
        <td>Trains runs must not be performed over the assigned wheel 
            detection equipment while calibrating the ACM.</td>
            <td>${g1}</td>
        
    </tr>
    <tr>
        <td>16.2.2</td>
        <td>No Modification shall be made to the ZP 43 and the 
            connecting cable. 
            (Exception: If necessary, the counting cable with flexible 
            tube may be shortened to the length required at the 
            mounting location.
            </td>
            <td>${g2}</td>
        
    </tr>
    <tr>
        <td>16.2.3</td>
        <td>Cores carrying a voltage of upto 400VAC (heavy current) 
            must not be routed together with the signaling cores 
            together with cores of the wheel detection equipment (e.g. 
            combi cable)
            </td>
            <td>${g3}</td>
        
    </tr>
    <tr>
        <td>16.2.4</td>
        <td>Do not use power supply provided to axle counter for any 
            other applications as it may disturb functioning axle counter 
            system. 
            </td>
            <td>${g4}</td>
        
    </tr>
    <tr>
        <td>16.2.5</td>
        <td>Do not open the electronic junction box in rainy season 
            unless very emergency and should be covered to protect 
            from moisture.</td>
            <td>${g5}</td>
        
    </tr>
    <tr>
        <td>16.2.6</td>
        <td>Do not carry out any testing activity on quad cable when 
            connected to counting head to prevent short circuit</td>
            <td>${g6}</td>
        
    </tr>
    <tr>
        <td>16.2.7</td>
        <td>Do not attempt to repair any of damaged boards or 
            components at site, send it to Siemens for repairing. </td>
            <td>${g7}</td>
        
    </tr>
    <tr>
        <td>16.2.8</td>
        <td>Do not keep the faulty boards at site for very long period 
        these boards should be repaired as early as possible.</td>
        <td>${g8}</td>
    </td>
    </tr>
    <tr>
        <td>16.2.9</td>
        <td>Do not handle any of the boards without following necessary 
            precautionary measures</td>
            <td>${g9}</td>
        
    </tr>
    <tr>
        <td>16.2.10</td>
        <td>Do not store spare boards at wet location as it may affect 
            characteristics of components</td>
            <td>${g10}</td>
        
    </tr>
    
</table>
<div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>

                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                    
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>
        <div class="page-break"></div>
        <table id="table1">
        <tr>
            <th>Page 22 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
            
        </tr>
    </table>
       <p style="text-align: center;"><u><b>Annexure-'A</b></u></p>
       <p style="padding-left: 70px;"><u>Precautions to be taken during the wiring/connections at the time of commissioning.</u></p>
       <p style="padding-left: 70px;">Position of one quad in Quad cable. 
    </p>
    <p><span style="color: red;padding-left: 70px;">1st pair</span><b> = White & Quad Colour, i.e. A & B wires </b></p>
    <p><span style="color: violet;padding-left: 70px;">1st pair</span><b> =Red & Grey Colour, i.e. C & D wires of the designated Colour of Quad. </b></p>
    <p style="padding-left: 70px;">Each Quad is bounded by the respective Quad Colour binder. </p>
    <p style="padding-left: 70px;"><b>Table -2</b></p>
   <table>
    <tr >
         <td colspan="9"style="text-align: center;">Colour Scheme of PE insulated Quads. 
        </td>
    </tr>
    <tr>
        <td style="width: 10%;">Quad 
            Colour</td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
    </tr>
    <tr>
        <td></td>
        <td>Quad 
            no.</td>
            <td>Pair no. </td>
            <td>A-wire  </td>
            <td>B-wire  </td>
            <td>Pair no.  </td>
            <td>C-wire  </td>
            <td>D-wire  </td>
</tr>
<tr>
    <td>Orange</td>
    <td>1</td>
        <td>1A</td>
        <td>White  </td>
        <td>Orange </td>
        <td>1B </td>
        <td>Red  </td>
        <td>Grey  </td>
</tr>
<tr>
    <td>Blue</td>
    <td>2</td>
        <td>2A</td>
        <td>White  </td>
        <td>Blue </td>
        <td>2B </td>
        <td>Red  </td>
        <td>Grey  </td>
</tr>
<tr>
    <td>Brown</td>
    <td>3</td>
        <td>3A</td>
        <td>White  </td>
        <td>Brown </td>
        <td>3B </td>
        <td>Red  </td>
        <td>Grey  </td>
</tr>
<tr>
    <td>Brown</td>
    <td>3</td>
        <td>3A</td>
        <td>White  </td>
        <td>Brown </td>
        <td>3B </td>
        <td>Red  </td>
        <td>Grey  </td>
</tr>
<tr>
    <td>Green</td>
    <td>4</td>
        <td>4A</td>
        <td>White  </td>
        <td>Green </td>
        <td>4B </td>
        <td>Red  </td>
        <td>Grey  </td>
</tr>
<tr>
    <td>Yellow</td>
    <td>4</td>
        <td>5A</td>
        <td>White  </td>
        <td>Yellow </td>
        <td>5B </td>
        <td>Red  </td>
        <td>Grey  </td>
</tr>
<tr>
    <td>Black</td>
    <td>6</td>
        <td>6A</td>
        <td>White  </td>
        <td>Black </td>
        <td>5B </td>
        <td>Red  </td>
        <td>Grey  </td>
</tr>
   </table>
    
<div class="container">
<div class="signature-container left">
    <div class="signature">
        <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
        <input type="file" id="signatureImage1" accept="image/*" required>

        <p>Signature of Siemens Representative:</p>
        <p>With Name, Designation & Date</p>
    </div>
</div>
<div class="signature-container right">
    <div class="rsign">
        <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

        
        <p>Signature of Railway Representative:</p>
        <p>With Name, Designation & Date</p>
    </div>
</div>
</div>
<div class="page-break"></div>

<table id="table1">
<tr>
    <th>Page 23 of 34</th>
    <th>Document no.:SI-G-7.1-0624</th>
    <th>Version:2.0</th>
    <th>Date of issue:19.11.2019</th>
</tr>
<tr><td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
    and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
    
</tr>

</table>
<p style="padding-left: 65px;text-decoration: underline;text-align: center;"><b><u>Annexure-'B'</u>
</b></p>
<p style="padding-left: 65px;text-decoration: underline;"><b><u>Temperature correction factor for conductor resistance for annealed high conductivity copper.</u>

</b></p>
<img src="/image3" style="width: 95%; padding: 29px;" alt="Description">
    

 

<div class="container">
    <div class="signature-container left">
        <div class="signature">
            <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
            <input type="file" id="signatureImage1" accept="image/*" required>

            <p>Signature of Siemens Representative:</p>
            <p>With Name, Designation & Date</p>
        </div>
    </div>
    <div class="signature-container right">
        <div class="rsign">
            <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

            
            <p>Signature of Railway Representative:</p>
            <p>With Name, Designation & Date</p>
        </div>
    </div>
</div>
<div class="page-break"></div>

<table id="table1">
            <tr>
                <th>Page 24 of 34</th>
                <th>Document no.:SI-G-7.1-0624</th>
                <th>Version:2.0</th>
                <th>Date of issue:19.11.2019</th>
            </tr>
            <tr>
                <td colspan="4" style="text-align:center;">
                    Title: Pre-commissioning Check List of Multi Section Digital Axle Counter MSDAC Model: ACM 200<br>
                    (Another variant) and Track side Equipment ZP D 43 of M/s Siemens India Ltd., Mumbai.
                </td>
            </tr>
        </table>
        <p style="text-align: center;"><u><b>Annexure-C</b></u></p>
        <p style="padding-left: 75px;"><u><b>Response test of Digital Axle Counter with different type of trolley wheels done jointly with railways</b></u></p>
        <table>
            <tr>
                <td>SI.No.</td>
                <td>Type Of Trolley Wheel</td>
                <td>Observed Result (No influence/influence)</td>
                <td>Remarks</td>
            </tr>
            <tr>
                <td rowspan="6" style="text-align: center;width:5%;">1</td>
                <td style="width:20%;">4 Spoke wheel</td>
                <td rowspan="6">${b1}</td>
                <td rowspan="6">${r1}</td>
            </tr>
            <tr><td>Wheel dia with flange</td></tr>
            <tr><td>Wheel width</td></tr>
            <tr><td>Flange width</td></tr>
            <tr><td>Flange depth</td></tr>
            <tr><td>Spoke width</td></tr>
            
            <tr>
                <td rowspan="6" style="text-align: center;width:5%;">2</td>
                <td style="width:20%;">6 Spoke wheel</td>
                <td rowspan="6">${b2}</td>
                <td rowspan="6">${r2}</td>
            </tr>
            <tr><td>Wheel dia with flange</td></tr>
            <tr><td>Wheel width</td></tr>
            <tr><td>Flange width</td></tr>
            <tr><td>Flange depth</td></tr>
            <tr><td>Spoke width</td></tr>
    
            <tr>
                <td rowspan="6" style="text-align: center;width:5%;">3</td>
                <td style="width:20%;"><b>Solid Wheel with 6 Holes</b></td>
                <td rowspan="6">${b3}</td>
                <td rowspan="6">${r3}</td>
            </tr>
            <tr><td>Wheel dia with flange</td></tr>
            <tr><td>Wheel width</td></tr>
            <tr><td>Flange width</td></tr>
            <tr><td>Flange depth</td></tr>
            <tr><td>Spoke width</td></tr>
    
            <tr>
                <td rowspan="6" style="text-align: center;width:5%;">4</td>
                <td style="width:20%;">8 Spoke wheel</td>
                <td rowspan="6">${b4}</td>
                <td rowspan="6">${r4}</td>
            </tr>
            <tr><td>Wheel dia with flange</td></tr>
            <tr><td>Wheel width</td></tr>
            <tr><td>Flange width</td></tr>
            <tr><td>Flange depth</td></tr>
            <tr><td>Spoke width</td></tr>
    
            <tr>
                <td rowspan="6" style="text-align: center;width:5%;">5</td>
                <td style="width:20%;">6 Spoke with slots</td>
                <td rowspan="6">${b5}</td>
                <td rowspan="6">${r5}</td>
            </tr>
            <tr><td>Wheel dia with flange</td></tr>
            <tr><td>Wheel width</td></tr>
            <tr><td>Flange width</td></tr>
            <tr><td>Flange depth</td></tr>
            <tr><td>Spoke width</td></tr>
        </table>
        <div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>
    
                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>
    
                    
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>
<div class="page-break"></div>
<table id="table1">
<tr>
    <th>Page 25 of 34</th>
    <th>Document no.:SI-G-7.1-0624</th>
    <th>Version:2.0</th>
    <th>Date of issue:19.11.2019</th>
</tr>
<tr>
    <td colspan="4" style="text-align:center;">
        Title: Pre-commissioning Check List of Multi Section Digital Axle Counter MSDAC Model: ACM 200<br>
        (Another variant) and Track side Equipment ZP D 43 of M/s Siemens India Ltd., Mumbai.
    </td>
</tr>
</table>
<br>
<table>
<tr>
    <td>SI.No.</td>
    <td>Type Of Trolley Wheel</td>
    <td>Observed Result (No influence/influence)</td>
    <td>Remarks</td>
</tr>
<tr>
    <td rowspan="7" style="text-align: center;width:5%;">6</td>
    <td style="width:20%;">Perforated</td>
    
    <td rowspan="7">${d1}</td>
    <td rowspan="7">${rem1}</td>
   
</tr>
<tr><td>No. of perforation with 
    Dia. 
    </td></tr>
<tr><td>Wheel dia with flange</td></tr>
<tr><td>Wheel width</td></tr>
<tr><td>Flange width</td></tr>
<tr><td>Flange depth</td></tr>
<tr><td>Spoke width</td></tr>

<tr>
    <td rowspan="5" style="text-align: center;width:5%;">7</td>
    <td style="width:20%;">Solid wheel</td>
   
    <td rowspan="7">${d2}</td>
 
    <td rowspan="7">${rem2}</td>
    
</tr>
<tr><td>Wheel dia with flange</td></tr>
<tr><td>Wheel width</td></tr>
<tr><td>Flange width</td></tr>
<tr><td>Flange depth</td></tr>


<tr>
    <td rowspan="5" style="text-align: center;width:5%;">8</td>
    <td style="width:20%;"><b>Motor trolley wheel, 
        Solid 
        </b></td>
        <td rowspan="5">${d3}</td>
 
        <td rowspan="5">${rem3}</td>
</tr>
<tr><td>Wheel dia with flange</td></tr>
<tr><td>Wheel width</td></tr>
<tr><td>Flange width</td></tr>
<tr><td>Flange depth</td></tr>


<tr>
    <td rowspan="5" style="text-align: center;width:5%;">9</td>
    <td style="width:20%;">Rail Dolley Wheel, Solid 
    </td>
    <td rowspan="5">${d4}</td>
 
    <td rowspan="5">${rem4}</td>
</tr>
<tr><td>Wheel dia with flange</td></tr>
<tr><td>Wheel width</td></tr>
<tr><td>Flange width</td></tr>
<tr><td>Flange depth</td></tr>


<tr>
    <td rowspan="5" style="text-align: center;width:5%;">10</td>
    <td style="width:20%;">Material Trolley Solid 
        wheel </td>
        <td rowspan="5">${d5}</td>
 
    <td rowspan="5">${rem5}</td>
</tr>
<tr><td>Wheel dia with flange</td></tr>
<tr><td>Wheel width</td></tr>
<tr><td>Flange width</td></tr>
<tr><td>Flange depth</td></tr>
<tr>
    <td rowspan="5" style="text-align: center;width:5%;">11</td>
    <td style="width:20%;">Motor Trolley</td>
    <td rowspan="5">${d6}</td>
 
    <td rowspan="5">${rem6}</td>
</tr>
<tr><td>Wheel dia with flange</td></tr>
<tr><td>Wheel width</td></tr>
<tr><td>Flange width</td></tr>
<tr><td>Flange depth</td></tr>
<tr>
    <td rowspan="5" style="text-align: center;width:5%;">12</td>
    <td style="width:20%;">Tower wagon</td>
    <td rowspan="5">${d7}</td>
 
    <td rowspan="5">${rem7}</td>
</tr>
<tr><td>Wheel dia with flange</td></tr>
<tr><td>Wheel width</td></tr>
<tr><td>Flange width</td></tr>
<tr><td>Flange depth</td></tr>

</table>
<div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>

                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                    
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>
        <div class="page-break"></div>
        <table id="table1">
        <tr>
            <th>Page 26 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr>
            <td colspan="4" style="text-align:center;">
                Title: Pre-commissioning Check List of Multi Section Digital Axle Counter MSDAC Model: ACM 200<br>
                (Another variant) and Track side Equipment ZP D 43 of M/s Siemens India Ltd., Mumbai.
            </td>
        </tr>
    </table>
    <br>
    <br>
    <div class="image-container">
        <img src="/image4" alt="Description of the image" class="responsive-image">

    </div>
 
    <div class="container">
        <div class="signature-container left">
            <div class="signature">
                <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                <input type="file" id="signatureImage1" accept="image/*" required>

                <p>Signature of Siemens Representative:</p>
                <p>With Name, Designation & Date</p>
            </div>
        </div>
        <div class="signature-container right">
            <div class="rsign">
                <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                
                <p>Signature of Railway Representative:</p>
                <p>With Name, Designation & Date</p>
            </div>
        </div>
    </div>

<div class="page-break"></div>
<table id="table1">
        <tr>
            <th>Page 27 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr><td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
            
        </tr>
    </table>
    <p style="padding-left: 65px;text-decoration: underline;text-align: center;"><b><u>Annexure-'E'</u>
    </b></p>
    <p style="padding-left: 65px;text-decoration: underline;text-align: center;"><b><u>Serial Nos. of ACM modules and its components</u> 

    </b></p>
    <div class="table-container">
       <table>
       <tr>
        <td style="width:2%;text-align:center"><b>Sl.No.</b></td>
        <td style="width:15%;text-align:center"><b>ACM 200 Module</b></td>
        <td style="width:25%;text-align:center"><b>Ethernet Switch </b></td>
               
        <td style="width:25%;text-align:center"><b>ID Plug IP Address</b> </td>
        <td style="width:25%;text-align:center"><b>Power Supply Module 
            (If Provided)</b></td>
               
       </tr>
            <tr>
                <td style="width:2%;text-align: justify;">1</td>
                <td>${c1}</td>
                <td>${c2}</td>
                <td>${c3}</td>
                <td>${c4}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">2</td>
                <td>${c5}</td>
                <td>${c6}</td>
                <td>${c7}</td>
                <td>${c8}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">3</td>
                <td>${c9}</td>
                <td>${c10}</td>
                <td>${c11}</td>
                <td>${c12}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">4</td>
                <td>${c13}</td>
                <td>${c14}</td>
                <td>${c15}</td>
                <td>${c16}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">5</td>
                <td>${c17}</td>
                <td>${c18}</td>
                <td>${c19}</td>
                <td>${c20}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">6</td>
                <td>${c21}</td>
                <td>${c22}</td>
                <td>${c23}</td>
                <td>${c24}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">7</td>
                <td>${c25}</td>
                <td>${c26}</td>
                <td>${c27}</td>
                <td>${c28}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">8</td>
                <td>${c29}</td>
                <td>${c30}</td>
                <td>${c31}</td>
                <td>${c32}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">9</td>
                <td>${c33}</td>
                <td>${c34}</td>
                <td>${c35}</td>
                <td>${c36}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">10</td>
                <td>${c37}</td>
                <td>${c38}</td>
                <td>${c39}</td>
                <td>${c40}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">11</td>
                <td>${c41}</td>
                <td>${c42}</td>
                <td>${c43}</td>
                <td>${c44}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">12</td>
                <td>${c45}</td>
                <td>${c46}</td>
                <td>${c47}</td>
                <td>${c48}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">13</td>
                <td>${c49}</td>
                <td>${c50}</td>
                <td>${c51}</td>
                <td>${c52}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">14</td>
                <td>${c53}</td>
                <td>${c54}</td>
                <td>${c55}</td>
                <td>${c56}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">15</td>
                <td>${c57}</td>
                <td>${c58}</td>
                <td>${c59}</td>
                <td>${c60}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">16</td>
                <td>${c61}</td>
                <td>${c62}</td>
                <td>${c63}</td>
                <td>${c64}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">17</td>
                <td>${c65}</td>
                <td>${c66}</td>
                <td>${c67}</td>
                <td>${c68}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">18</td>
                <td>${c69}</td>
                <td>${c70}</td>
                <td>${c71}</td>
                <td>${c72}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">19</td>
                <td>${c73}</td>
                <td>${c74}</td>
                <td>${c75}</td>
                <td>${c76}</td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">20</td>
                <td>${c77}</td>
                <td>${c78}</td>
                <td>${c79}</td>
                <td>${c80}</td>
            </tr>
            </table>
            <div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>

                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                    
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>
<div class="page-break"></div>
<table id="table1">
<tr>
    <th>Page 28 of 34</th>
    <th>Document no.:SI-G-7.1-0624</th>
    <th>Version:2.0</th>
    <th>Date of issue:19.11.2019</th>
</tr>
<tr><td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
    and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
    
</tr>
</table>
<p style="padding-left: 65px;text-decoration: underline;text-align: center;"><b><u>Annexure-'F'</u>
</b></p>
<p style="padding-left: 65px;text-decoration: underline;text-align: center;"><b><u>Serial Nos. of ACM modules and its components</u> 

</b></p>
<div class="table-container">
<table>
<tr>
<td style="width:2%;text-align:center"><b>Sl.No.</b></td>
<td style="width:15%;text-align:center"><b>ACM 200 Module</b></td>
<td style="width:25%;text-align:center"><b>Ethernet Switch </b></td>
       
<td style="width:25%;text-align:center"><b>ID Plug IP Address</b> </td>
<td style="width:25%;text-align:center"><b>Power Supply Module 
    (If Provided)</b></td>
       
</tr>
    <tr>
        <td style="width:2%;text-align:justify;">1</td>
        <td><input type="text" id="z1" name="z1" required></td>
        <td><input type="text" id="z2" name="z2" required></td>
        <td><input type="text" id="z3" name="z3" required></td>
        <td><input type="text" id="z4" name="z4" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align:justify;">2</td>
        <td><input type="text" id="z5" name="z5" required></td>
        <td><input type="text" id="z6" name="z6" required></td>
        <td><input type="text" id="z7" name="z7" required></td>
        <td><input type="text" id="z8" name="z8" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align:justify;">3</td>
        <td><input type="text" id="z9" name="z9" required></td>
        <td><input type="text" id="z10" name="z10" required></td>
        <td><input type="text" id="z11" name="z11" required></td>
        <td><input type="text" id="z12" name="z12" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align:justify;">4</td>
        <td><input type="text" id="z13" name="z13" required></td>
        <td><input type="text" id="z14" name="z14" required></td>
        <td><input type="text" id="z15" name="z15" required></td>
        <td><input type="text" id="z16" name="z16" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align:justify;">5</td>
        <td><input type="text" id="z17" name="z17"required></td>
        <td><input type="text" id="z18"name="z18" required></td>
        <td><input type="text" id="z19" name="z19" required></td>
        <td><input type="text" id="z20" name="z20" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align:justify;">6</td>
        <td><input type="text" id="z21" name="z21" required></td>
        <td><input type="text" id="z22" name="z22" required></td>
        <td><input type="text" id="z23" name="z23" required></td>
        <td><input type="text" id="z24" name="z24" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align:justify;">7</td>
        <td><input type="text" id="z25" name="z25" required></td>
        <td><input type="text" id="z26" name="z26" required></td>
        <td><input type="text" id="z27" name="z27" required></td>
        <td><input type="text" id="z28" name="z28" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align:justify;">8</td>
        <td><input type="text" id="z29" name="z29" required></td>
        <td><input type="text" id="z30" name="z30" required></td>
        <td><input type="text" id="z31" name="z31" required></td>
        <td><input type="text" id="z32" name="z32" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align:justify;">9</td>
        <td><input type="text" id="z33" name="z33" required></td>
        <td><input type="text" id="z34" name="z34" required></td>
        <td><input type="text" id="z35" name="z35" required></td>
        <td><input type="text" id="z36" name="z36" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align:justify;">10</td>
        <td><input type="text" id="z37" name="z37" required></td>
        <td><input type="text" id="z38" name="z38" required></td>
        <td><input type="text" id="z39" name="z39" required></td>
        <td><input type="text" id="z40" name="z40" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align:justify;">11</td>
        <td><input type="text" id="z41" name="z41" required></td>
        <td><input type="text" id="z42" name="z42" required></td>
        <td><input type="text" id="z43" name="z43" required></td>
        <td><input type="text" id="z44" name="z44" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align:justify;">12</td>
        <td><input type="text" id="z45" name="z45" required></td>
        <td><input type="text" id="z46" name="z46" required></td>
        <td><input type="text" id="z47" name="z47" required></td>
        <td><input type="text" id="z48" name="z48" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align:justify;">13</td>
        <td><input type="text" id="z49" name="z49" required></td>
        <td><input type="text" id="z50" name="z50" required></td>
        <td><input type="text" id="z51" name="z51" required></td>
        <td><input type="text" id="z52" name="z52" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align:justify;">14</td>
        <td><input type="text" id="z53" name="z53" required></td>
        <td><input type="text" id="z54" name="z54" required></td>
        <td><input type="text" id="z55" name="z55" required></td>
        <td><input type="text" id="z56" name="z56" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">15</td>
        <td><input type="text" id="z57" name="z57" required></td>
        <td><input type="text" id="z58" name="z58" required></td>
        <td><input type="text" id="z59" name="z59" required></td>
        <td><input type="text" id="z60" name="z60" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">16</td>
        <td><input type="text" id="z61" name="z61" required></td>
        <td><input type="text" id="z62" name="z62" required></td>
        <td><input type="text" id="z63" name="z63" required></td>
        <td><input type="text" id="z64" name="z64" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">17</td>
        <td><input type="text" id="z65" name="z65" required></td>
        <td><input type="text" id="z66" name="z66" required></td>
        <td><input type="text" id="z67" name="z67" required></td>
        <td><input type="text" id="z68" name="z68" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">18</td>
        <td><input type="text" id="z69" name="z69" required></td>
        <td><input type="text" id="z70" name="z70" required></td>
        <td><input type="text" id="z71" name="z71" required></td>
        <td><input type="text" id="z72" name="z72" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">19</td>
        <td><input type="text" id="z73" name="z73" required></td>
        <td><input type="text" id="z74" name="z74" required></td>
        <td><input type="text" id="z75" name="z75" required></td>
        <td><input type="text" id="z76" name="z76" required></td>
    </tr>
    <tr>
        <td style="width:2%;text-align: justify;">20</td>
        <td><input type="text" id="z77" name="z77" required></td>
        <td><input type="text" id="z78" name="z78" required></td>
        <td><input type="text" id="z79" name="z79" required></td>
        <td><input type="text" id="z80" name="z80" required></td>
    </tr>
</table>
</div><div class="container">
<div class="signature-container left">
    <div class="signature">
        <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
        <input type="file" id="signatureImage1" accept="image/*" required>

        <p>Signature of Siemens Representative:</p>
        <p>With Name, Designation & Date</p>
    </div>
</div>
<div class="signature-container right">
    <div class="rsign">
        <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

        
        <p>Signature of Railway Representative:</p>
        <p>With Name, Designation & Date</p>
    </div>
</div>
</div>

<div class="page-break"></div>
<table id="table1">
        <tr>
            <th>Page 29 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr>
            <td colspan="4" style="text-align:center;">
               Document Title: Pre-commissioning Check List of Multi Section Digital Axle Counter MSDAC Model: ACM 200<br>
                (Another variant) and Track side Equipment ZP D 43 of M/s Siemens India Ltd., Mumbai.
            </td>
        </tr>
    </table>
    <p style="text-align: center;"><b><u>Annexure - G</u></b>
    </p>
    <table>
        <tr>
        <td colspan="4" style="text-align: center;"><b><u>Technical Advisory Note</u></b></td>
        </tr>
        <tr>
            <td colspan="1" style="text-align: center;"><u>Subject</u></td>
            <td colspan="3" style="text-align: center;">ACM 200 MSDAC – Wiring Discipline</td>
            
        </tr>
        <tr>
            <td style="text-align: center;"><u>Document Number</u></td>
            <td style="text-align: center;"><u>STS/E/TAN/6001</u></td>
            <td style="text-align: center;"><u>Version</u></td>
            <td style="text-align: center;"><u>1.0</u></td>
            
        </tr>
        <tr>
            <td style="text-align: center;"><u>Dated</u></td>
            <td style="text-align: center;"><u>04.10.2011</u></td>
            <td style="text-align: center;"><u>Pages</u></td>
            <td style="text-align: center;"><u>2</u></td>
            
        </tr>
        
    </table>
    <p style="padding-left: 100px;padding-right:100px;font-size: 18px;">
        It has come to notice that usage, termination and wiring of quad cable is far from satisfactory for trouble-free 
        working of electronic equipment like digital axle counters/UFSBI. Basic issue pertains to electromagnetic 
        interference from parallel circuits in the cable and location. 
        
    </p>
    <p style="padding-left: 100px;padding-right:100px;font-size: 18px;">
        Following guidelines are recommended to enhance performance of Siemens MSDAC systems. 
    </p>
    <p style="padding-left: 100px;padding-right:100px;font-size: 18px;">
        <b> 1. Parallel circuits:</b><br> 
 a.&nbsp;&nbsp; Requirement is that parallel circuits shall be as far spaced, spatially, as possible. Long parallel circuits 
 shall be avoided in the same quad. So, one long and one short circuit can be accommodated in same quad 
 but not both long circuits. 
 <br> b.&nbsp;&nbsp; Siemens MSDAC circuits in BPAC of up and down lines in double line sections shall be in separate quads
 and kept one/two quad distance away from each other to avoid mutual interference in long parallel circuits. 
 <br> c.&nbsp;&nbsp; SIEMENS MSDAC circuits in location shall not be bunched along with parallel relay/power circuits. Relay 
 circuits are known to generate switching transients that can couple enough energy in parallel circuits nearby 
 and interfere with low power SIEMENS MSDAC data circuits.
 <br> d.&nbsp;&nbsp; Any other parallel wiring (relay circuits/power circuits/Earthing wires etc) shall cross SIEMENS MSDAC 
 circuits at perpendicular and any parallel portion shall be kept at minimum 150mm (lateral distance) away 
 from the wiring for SIEMENS MSDAC circuits. 
 <br> e.&nbsp;&nbsp; Relay circuits shall preferably be not taken in same cable as SIEMENS MSDAC circuits. In unavoidable 
 circumstances relay circuits shall be in furthest quad (spatially) from the one containing SIEMENS MSDAC 
 circuits.  
 <br> <br>
 <b>2.&nbsp;&nbsp; Twisting of cable pair: </b>
 <br> a.&nbsp;&nbsp; Twisted pairs are required to avoid mutual interference between low level data signals. Even short lengths 
 of non- twisting (few inches) can couple enough noise to interfere with low voltage SIEMENS MSDAC 
 communication signals.  
 <br> b.&nbsp;&nbsp; Quad cable twisting shall be ensured during termination so that minimum one twist per inch is maintained 
 till the last inch into terminations. 
 <br> c.&nbsp;&nbsp; Any wiring from quad cable terminations to equipment shall be done using twisted singles of indoor signaling 
 cable (1 mm square) or any other approved indoor twisted pair cable.  
 <br> d.&nbsp;&nbsp; Signaling cable or any other untwisted cable pair shall never be used in SIEMENS MSDAC communication 
 circuits to avoid intermittent type of failure. 
 

 <div class="container">
 <div class="signature-container left">
     <div class="signature">
         <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
         <input type="file" id="signatureImage1" accept="image/*" required>

         <p>Signature of Siemens Representative:</p>
         <p>With Name, Designation & Date</p>
     </div>
 </div>
 <div class="signature-container right">
     <div class="rsign">
         <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

         
         <p>Signature of Railway Representative:</p>
         <p>With Name, Designation & Date</p>
     </div>
 </div>
</div>
<div class="page-break"></div>

<table id="table1">
<tr>
    <th>Page 30 of 34</th>
    <th>Document no.:SI-G-7.1-0624</th>
    <th>Version:2.0</th>
    <th>Date of issue:19.11.2019</th>
</tr>
<tr>
    <td colspan="4" style="text-align:center;">
        Title: Pre-commissioning Check List of Multi Section Digital Axle Counter MSDAC Model: ACM 200<br>
        (Another variant) and Track side Equipment ZP D 43 of M/s Siemens India Ltd., Mumbai.
    </td>
</tr>
</table>
<br>

<p style="padding-left: 95px;padding-right:80px;font-size: 18px;">
<b> 3. Wiring & Terminations:</b><br> 
a.&nbsp;&nbsp; Preferably, quad cable shall be terminated in cage clamp type terminals that provide solid 360 degree 
surface connection and sufficient pressure on the wire to make a good electrical contact. 
<br> b.&nbsp;&nbsp; Cables shall be terminated at the bottom portion of location keeping equipment and their wiring at higher level 
inside location. This will help in keeping wiring of different types segregated from each other. All earth wires and 
surge protection devices also shall be kept at the lower levels for the same reasons. 
<br> c.&nbsp;&nbsp; Wiring and cabling shall not bebent abruptly and shall be given sufficient bending radius to ensure that 
conductors inside the cabling/wiring are not damaged due to bending. 
<br> d.&nbsp;&nbsp; Wiring shall be properly supported by channels toughing, cable clamps and other means to ensure that 
connections are not under pressure due to wire hang. 
<br> e.&nbsp;&nbsp; Wiring and cabling shall not be supported at any sharp edged object to ensure that conductors are not damaged 
during their installation/maintenance. 
<br> 4.&nbsp;&nbsp; Continuity and Earthing of cable armor & screen at intermediate terminations/Joints: 
<br> a.&nbsp;&nbsp; Screening of quad cable is effective only when sufficient induced current can flow in the screen thereby 
cancelling/reducing the induction from 25KV AC for the cable conductors. For adequate induced current to flow 
in screen, it is necessary that good earth connections are provided for cable screen & armor. 
<br> b.&nbsp;&nbsp; Quad cable screen and armor shall be made electrically continuous at the intermediate terminations/ joints by 
soldering and connecting both ends of cable screens & amours at the locations. 
<br> c.&nbsp;&nbsp; Connections to screen shall preferably be made by thin metallic clamps soldered to screens to ensure good 
surface connection for electrical continuity. 
<br> d.&nbsp;&nbsp; Combined Earth for armor and screen at intermediate locations shall have earth values as low as possible but 
shall be never more than 5 ohms. 
<br> e.&nbsp;&nbsp; Earth connections shall be kept as short and as straight as possible because any loop or turns can create 
inductive elements that impede quick discharge of transients and surges to ground. 

</p>
<div class="container">
<div class="signature-container left">
    <div class="signature">
        <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
        <input type="file" id="signatureImage1" accept="image/*" required>

        <p>Signature of Siemens Representative:</p>
        <p>With Name, Designation & Date</p>
    </div>
</div>
<div class="signature-container right">
    <div class="rsign">
        <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

        
        <p>Signature of Railway Representative:</p>
        <p>With Name, Designation & Date</p>
    </div>
</div>
</div>

<div class="page-break"></div>
<table id="table1">
        <tr>
            <th>Page 31 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr>
            <td colspan="4" style="text-align:center;">
               Document Title: Pre-commissioning Check List of Multi Section Digital Axle Counter MSDAC Model: ACM 200<br>
                (Another variant) and Track side Equipment ZP D 43 of M/s Siemens India Ltd., Mumbai.
            </td>
        </tr>
    </table><br><br>
    <p style="text-align: center;"><b><u>Annexure - H</u></b>
    </p>
    <p style="text-align: center;"><b><u>OEM’s Site Installation Certificate</u></b>
    </p>
    <p style="text-align: center;"><b><u>(Ref: This office letter no.:                                     ) </u></b>
    </p>
    <p style="width: 95%;padding-left:70px">To <br>CSTE /Railway</p>
    <p style="width: 95%;padding-left:70px;">This is to certify that verification of system installation (details given below) has been completed by undersigned Original Equipment Manufacturer (OEM representative) and all necessary arrangements like earthing, surge protection, power supply, power & communication cables and equipment wiring <br> meet the required standards of engineering for trouble free working of installed system.</p>
    <ul style="text-align: center;list-style: none; padding: 0;">
      <li><strong>System being Commissioned:</strong></li>
      <li><strong>Station/Section:</strong></li>
      <li><strong>Division:</strong></li>
      <li><strong>Date of Commissioning:</strong></li>
    </ul>
    <p style="margin: 0;width: 95%;padding-left:70px">Name of RDSO approved Original Equipment Manufacturer:</p><br><br>
    <p style="margin: 0;width: 95%;padding-left:70px">Name of OEM representative with Designation</p>
    <p style="margin: 0;width: 95%;padding-left:70px">Name: - ___________________________</p>
    <p style="margin: 0;width: 95%;padding-left:70px">Designation: - ___________________________</p><br><br>
    <p style="margin: 0;width: 95%;padding-left:70px">Signature of OEM representative with date: </p>


    <div class="container">
    <div class="signature-container left">
        <div class="signature">
            <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
            <input type="file" id="signatureImage1" accept="image/*" required>

            <p>Signature of Siemens Representative:</p>
            <p>With Name, Designation & Date</p>
        </div>
    </div>
    <div class="signature-container right">
        <div class="rsign">
            <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

            
            <p>Signature of Railway Representative:</p>
            <p>With Name, Designation & Date</p>
        </div>
    </div>
</div>
<div class="page-break"></div>
<table id="table1">
<tr>
<th>Page 32 of 34</th>
<th>Document no.:SI-G-7.1-0624</th>
<th>Version:2.0</th>
<th>Date of issue:19.11.2019</th>
</tr>
<tr>
<td colspan="4" style="text-align:center;">
    Title: Pre-commissioning Check List of Multi Section Digital Axle Counter MSDAC Model: ACM 200<br>
    (Another variant) and Track side Equipment ZP D 43 of M/s Siemens India Ltd., Mumbai.
</td>
</tr>
</table>
<P style="text-align: center;"><b><u>Annexure - I
</u></b></P>
<p style="padding-left: 75px;"><b><u>Verification of the Checksum of ACM 200 Software Module: </u></b></p>
<p style="padding-left: 75px;">Connect the ACM module to configuration PC. Open version window on menu bar and check ACM software MD4 as 
shown in below screen.</p>
<div class="image-container">
        <img src="/image6" alt="Description of the image" class="responsive-image">

    </div>
<div class="container">
<div class="signature-container left">
    <div class="signature">
        <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
        <input type="file" id="signatureImage1" accept="image/*" required>

        <p>Signature of Siemens Representative:</p>
        <p>With Name, Designation & Date</p>
    </div>
</div>
<div class="signature-container right">
    <div class="rsign">
        <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

        
        <p>Signature of Railway Representative:</p>
        <p>With Name, Designation & Date</p>
    </div>
</div>
</div>
<div class="page-break"></div>

<table id="table1">
        <tr>
            <th>Page 33 of 34</th>
            <th>Document no.:SI-G-7.1-0624</th>
            <th>Version:2.0</th>
            <th>Date of issue:19.11.2019</th>
        </tr>
        <tr><td colspan="4" style="text-align:center;">Document Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
            and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
            
        </tr>
       
    </table>
    <p style="padding-left: 65px;text-decoration: underline;text-align: center;"><b><u>Annexure-'J'</u>
    </b></p>
    <p style="padding-left: 65px;text-decoration: underline;text-align: center;"><b><u>Recommended Tool Kit for Testing</u> 


    </b></p>
    <img src="/image5" style="width: 95%; padding: 29px;" alt="Description">
    

   
            

    <div class="container">
    <div class="signature-container left">
        <div class="signature">
            <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
            <input type="file" id="signatureImage1" accept="image/*" required>

            <p>Signature of Siemens Representative:</p>
            <p>With Name, Designation & Date</p>
        </div>
    </div>
    <div class="signature-container right">
        <div class="rsign">
            <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

            
            <p>Signature of Railway Representative:</p>
            <p>With Name, Designation & Date</p>
        </div>
    </div>
</div>
<div class="page-break"></div>
<table id="table1">
<tr>
    <th>Page 34 of 34</th>
    <th>Document no.:SI-G-7.1-0624</th>
    <th>Version:2.0</th>
    <th>Date of issue:19.11.2019</th>
</tr>
<tr><td colspan="4" style="text-align:center;">Title:Pre-commissioning Check List of Multi Section Digital axle Counter MSDAC Model:ACM 200<br>(Another variant)
    and Track side Equipment ZP D 43 of M/s Siemens India Ltd.,Mumbai.</td>
    
</tr>
</table>
<P style="text-align: center;"><b><u>Annexure - K
</u></b></P>
<p style="padding-left: 75px;"><b>Diagnostic PC System Requirements: </b></p>
<div class="image-container">
        <img src="/image7" alt="Description of the image" class="responsive-image">

    </div>
<p  style="padding-left: 75px;"><b>Note: Perstation one diagnostic PC is required for Diagnosis and Configuration purpose of ACM 200 via Webpage.</b></p>
<div class="container">
<div class="signature-container left">
    <div class="signature">
        <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
        <input type="file" id="signatureImage1" accept="image/*" required>

        <p>Signature of Siemens Representative:</p>
        <p>With Name, Designation & Date</p>
    </div>
</div>
<div class="signature-container right">
    <div class="rsign">
        <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

        
        <p>Signature of Railway Representative:</p>
        <p>With Name, Designation & Date</p>
    </div>
</div>
</div>


<div class="page-break"></div>



<p style="padding-left: 65px;"><b><u>SIEMENS</u>
    </b></p>
    <p style="padding-left: 65px;text-decoration: underline;text-align: center;"><b><u>Annexure-'L'</u>
    </b></p>
    <p style="padding-left: 65px;text-decoration: underline;text-align: center;"><b><u>Measurement (parameters) at Track side Connection box</u>

    </b></p>
    <div class="table-container">
       <table>
       <tr>
        <td style="width:2%;text-align:center"><b>SR.No.</b></td>
        <td style="width:15%;text-align:center"><b>DP no.</b></td>
        <td style="width:25%;text-align:center"><b>U60 
            (30 – 72VDC)
            </b></td>
               
        <td style="width:25%;text-align:center"><b>FS 
            (41.5 – 44.5 
            kHz)</b> </td>
        <td style="width:25%;text-align:center"><b>UE1 
            ( 60 – 150 
            mvAc)
            </b></td>
        <td style="width:25%;text-align:center"><b>UE2
                ( 60 – 150 
                mvAc)
                </b></td>
               
       </tr>
            <tr>
                <td style="width:2%;text-align: justify;">1</td>
                <td><input type="text" id="y1" name="y1" required></td>
                <td><input type="text" id="y2" name="y2" required></td>
                <td><input type="text" id="y3" name="y3" required></td>
                <td><input type="text" id="y4" name="y4" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">2</td>
                <td><input type="text" id="y5" name="y5" required></td>
                <td><input type="text" id="y6" name="y6" required></td>
                <td><input type="text" id="y7" name="y7" required></td>
                <td><input type="text" id="y8" name="y8" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">3</td>
                <td><input type="text" id="y9" name="y9" required></td>
                <td><input type="text" id="y10" name="y10" required></td>
                <td><input type="text" id="y11" name="y11" required></td>
                <td><input type="text" id="y12" name="y12" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">4</td>
                <td><input type="text" id="y13" name="y13" required></td>
                <td><input type="text" id="y14" name="y14" required></td>
                <td><input type="text" id="y15" name="y15" required></td>
                <td><input type="text" id="y16" name="y16" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">5</td>
                <td><input type="text" id="y17" name="y17"required></td>
                <td><input type="text" id="y18"name="y18" required></td>
                <td><input type="text" id="y19" name="y19" required></td>
                <td><input type="text" id="y20" name="y20" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">6</td>
                <td><input type="text" id="y21" name="y21" required></td>
                <td><input type="text" id="y22" name="y22" required></td>
                <td><input type="text" id="y23" name="y23" required></td>
                <td><input type="text" id="y24" name="y24" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">7</td>
                <td><input type="text" id="y25" name="y25" required></td>
                <td><input type="text" id="y26" name="y26" required></td>
                <td><input type="text" id="y27" name="y27" required></td>
                <td><input type="text" id="y28" name="y28" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">8</td>
                <td><input type="text" id="y29" name="y29" required></td>
                <td><input type="text" id="y30" name="y30" required></td>
                <td><input type="text" id="y31" name="y31" required></td>
                <td><input type="text" id="y32" name="y32" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">9</td>
                <td><input type="text" id="y33" name="y33" required></td>
                <td><input type="text" id="y34" name="y34" required></td>
                <td><input type="text" id="y35" name="y35" required></td>
                <td><input type="text" id="y36" name="y36" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">10</td>
                <td><input type="text" id="y37" name="y37" required></td>
                <td><input type="text" id="y38" name="y38" required></td>
                <td><input type="text" id="y39" name="y39" required></td>
                <td><input type="text" id="y40" name="y40" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">11</td>
                <td><input type="text" id="y41" name="y41" required></td>
                <td><input type="text" id="y42" name="y42" required></td>
                <td><input type="text" id="y43" name="y43" required></td>
                <td><input type="text" id="y44" name="y44" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">12</td>
                <td><input type="text" id="y45" name="y45" required></td>
                <td><input type="text" id="y46" name="y46" required></td>
                <td><input type="text" id="y47" name="y47" required></td>
                <td><input type="text" id="y48" name="y48" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">13</td>
                <td><input type="text" id="y49" name="y49" required></td>
                <td><input type="text" id="y50" name="y50" required></td>
                <td><input type="text" id="y51" name="y51" required></td>
                <td><input type="text" id="y52" name="y52" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">14</td>
                <td><input type="text" id="y53" name="y53" required></td>
                <td><input type="text" id="y54" name="y54" required></td>
                <td><input type="text" id="y55" name="y55" required></td>
                <td><input type="text" id="y56" name="y56" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">15</td>
                <td><input type="text" id="y57" name="y57" required></td>
                <td><input type="text" id="y58" name="y58" required></td>
                <td><input type="text" id="y59" name="y59" required></td>
                <td><input type="text" id="y60" name="y60" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">16</td>
                <td><input type="text" id="y61" name="y61" required></td>
                <td><input type="text" id="y62" name="y62" required></td>
                <td><input type="text" id="y63" name="y63" required></td>
                <td><input type="text" id="y64" name="y64" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">17</td>
                <td><input type="text" id="y65" name="y65" required></td>
                <td><input type="text" id="y66" name="y66" required></td>
                <td><input type="text" id="y67" name="y67" required></td>
                <td><input type="text" id="y68" name="y68" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">18</td>
                <td><input type="text" id="y69" name="y69" required></td>
                <td><input type="text" id="y70" name="y70" required></td>
                <td><input type="text" id="y71" name="y71" required></td>
                <td><input type="text" id="y72" name="y72" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">19</td>
                <td><input type="text" id="y73" name="y73" required></td>
                <td><input type="text" id="y74" name="y74" required></td>
                <td><input type="text" id="y75" name="y75" required></td>
                <td><input type="text" id="y76" name="y76" required></td>
            </tr>
            <tr>
                <td style="width:2%;text-align: justify;">20</td>
                <td><input type="text" id="y77" name="y77" required></td>
                <td><input type="text" id="y78" name="y78" required></td>
                <td><input type="text" id="y79" name="y79" required></td>
                <td><input type="text" id="y80" name="y80" required></td>
            </tr>

                
                
                   
            
        </table>
    </div>
    <div class="container">
            <div class="signature-container left">
                <div class="signature">
                    <label for="signatureImage1" class="upload-button" id="uploadButton1"></label>
                    <input type="file" id="signatureImage1" accept="image/*" required>

                    <p>Signature of Siemens Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
            <div class="signature-container right">
                <div class="rsign">
                    <label for="signatureImage2" class="upload-button" id="uploadButton1"></label>

                    
                    <p>Signature of Railway Representative:</p>
                    <p>With Name, Designation & Date</p>
                </div>
            </div>
        </div>

        </body>
        </html>
        `);

        // Generate PDF
       // Generate PDF
       await page.evaluate(() => {
        document.querySelector('img[src="/image1"]').src = '/image1'; // Replace placeholder1 with the actual URL
        document.querySelector('img[src="/image2"]').src = '/image2'; // Replace placeholder2 with the actual URL
        // Add more lines to replace placeholders for additional images
      });
       const pdfBuffer = await page.pdf({
       
        format: 'A3',
        displayHeaderFooter: false,
        printBackground: true,
        pageRanges: '1-36', // Generate only page 1
       
        margin: {
          top: '50',
          right: '0px',
          bottom: '50',
          left: '0px',
        },
       
      });
           
   
       
   
        await browser.close();

        // Send the PDF as a response
        res.setHeader('Content-Type', 'application/pdf');
        res.setHeader('Content-Disposition', 'attachment; filename="form_submission.pdf"');
        res.send(pdfBuffer);
    } catch (error) {
        console.error('Error generating PDF:', error);
        res.status(500).send('Internal Server Error');
    }
});


       

// Start the server
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
