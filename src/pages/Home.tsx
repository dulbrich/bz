import { IonAccordion, IonAccordionGroup, IonButton, IonButtons, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonItem, IonLabel, IonList, IonMenuButton, IonModal, IonPage, IonRow, IonText, IonTitle, IonToolbar, isPlatform } from '@ionic/react';
import { addCircleOutline, arrowForwardOutline, happyOutline } from 'ionicons/icons';
import React, { useState } from 'react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {

    //const { name } = useParams<{ name: string; }>();
    const [showModal, setShowModal] = useState(false);
    const isDesktop = isPlatform('desktop');
    return (
        <IonPage>
            <IonHeader className="ion-no-border">
                <IonToolbar color="banzai">
                    <IonButtons slot="start">
                        <IonMenuButton />
                    </IonButtons>
                    <IonTitle>
                        <img src="/assets/images/banzai.png" alt="Banzai! logo" style={{ filter: "grayscale(100%) brightness(600%)", mixBlendMode: "multiply" }} />
                    </IonTitle>
                    <IonButtons slot="end" className="ion-padding">
                        {isDesktop && (
                            <>
                                <IonButton mode="ios" routerLink="/home/teachers-students">Teachers & Students</IonButton>
                                <IonButton mode="ios" routerLink="/home/banks">Banks & Credit Unions</IonButton>
                                <IonButton mode="ios" routerLink="/home/benefits">Businesses & Benefits</IonButton>
                                <IonButton mode="ios" routerLink="/home/blog">Blog</IonButton>
                                <IonButton mode="ios" routerLink="/home/help">Help</IonButton>
                            </>
                        )}
                        <IonButton mode="ios" fill="solid" color="blue" shape="round" style={{ width: "80px" }} onClick={() => setShowModal(true)}>Login</IonButton>
                    </IonButtons>
                </IonToolbar>
            </IonHeader>

            <IonContent fullscreen>
                {/*TOP BOX*/}
                <div style={{ width: "100%", backgroundColor: "var(--ion-color-banzai)", paddingLeft: isDesktop ? "80px" : "0px", paddingTop: isDesktop ? "60px" : ""}}>
                    <IonGrid className="ion-no-padding">
                        <IonRow className="ion-no-padding">
                            {/*WORDS COLUMN*/}
                            <IonCol size="12" size-lg="7">
                                <IonList className="ion-no-padding">
                                    <IonItem color="banzai" lines="none">
                                        <IonLabel
                                            color="light"
                                            className="ion-text-wrap large-text-font"
                                            style={{ fontSize: "65px", lineHeight: "1em" }}
                                        >
                                            An employee benefit with immediate benefits, every day.
                                        </IonLabel>
                                    </IonItem>
                                    <IonItem color="banzai" lines="none">
                                        <IonLabel
                                            color="light"
                                            className="ion-text-wrap  small-text-font"
                                            style={{ fontSize: "25px", lineHeight: "1.5em" }}
                                        >
                                            Your <strong>employees</strong> deserve to be financially sound. Banzai can get them there with <strong>interactive courses</strong>,&nbsp;
                                                <strong>articles</strong>. & <strong>virtual coaches</strong>. Employees will learn how to <strong>manage their money</strong> & will feel <strong>empowered</strong>.
                                        </IonLabel>
                                    </IonItem>
                                </IonList>
                                <div className="ion-padding" style={{ paddingTop: "70px", paddingBottom: "70px" }}>
                                    <IonButton color="blue" size="large" onClick={() => setShowModal(true)}>
                                        <IonLabel className="bold-text">Schedule A Demo <IonIcon icon={arrowForwardOutline} /></IonLabel>
                                    </IonButton>
                                    <br />
                                    <IonLabel color="medium" style={{ fontWeight: "600" }}>
                                        Already have an account? <strong>Log in</strong>.
                                    </IonLabel>
                                </div>
                            </IonCol>
                            {/*IMAGE COLUMN*/}
                            <IonCol size="12" size-lg="5">
                                <img src="/assets/images/ipad2.png" style={{ width: "100%" }} />
                            </IonCol>
                        </IonRow>
                    </IonGrid>
                </div>
                {/*BOTTOM BOX*/}
                <div style={{ width: "100%", paddingLeft: isDesktop ? "80px" : "", paddingTop: "70px", paddingRight: isDesktop ? "80px" : "" }}>
                    <IonGrid>
                        {/*BENEFITS OF BONZAI ROW*/}
                        <IonRow>
                            <IonCol size="12" >
                                <div style={{ textAlign: "center" }}>
                                    <div style={{ borderStyle: "solid", borderWidth: "4px", padding: "10px", width: "250px", display: "table", margin: "0 auto" }}>
                                        <IonLabel className="bold-text"><strong>BENEFITS OF BONZAI</strong></IonLabel>
                                    </div>
                                </div>
                            </IonCol>
                        </IonRow>
                        {/*FOUR REASONS ROW*/}
                        <IonRow>
                            <IonCol size="12" size-lg="3" className="ion-padding">
                                <IonRow><IonText><h1><IonIcon icon={happyOutline} /></h1></IonText></IonRow>
                                <IonRow><IonText className="lemon">EMPLOYEE SATISFACTION</IonText></IonRow>
                                <IonRow>&nbsp;</IonRow>
                                <IonRow><IonText style={{fontWeight: "600"}} color="medium">Lorem <a color="blue" href="">ipsum dolor</a> sit amet, consectetur adipiscing elit.</IonText></IonRow>
                            </IonCol>
                            <IonCol size="12" size-lg="3" className="ion-padding">
                                <IonRow><IonText><h1><IonIcon icon={happyOutline} /></h1></IonText></IonRow>
                                <IonRow><IonText className="lemon">2 MILLION USERS</IonText></IonRow>
                                <IonRow>&nbsp;</IonRow>
                                <IonRow><IonText style={{ fontWeight: "600" }} color="medium">Lorem <a color="blue" href="">ipsum dolor</a> sit amet, consectetur adipiscing elit. Vivamus tincidunt erat non sollicitudin <a color="secondary" href="">ultricies.</a></IonText></IonRow>
                            </IonCol>
                            <IonCol size="12" size-lg="3" className="ion-padding">
                                <IonRow><IonText><h1><IonIcon icon={happyOutline} /></h1></IonText></IonRow>
                                <IonRow><IonText className="lemon">100+ RESOURCES</IonText></IonRow>
                                <IonRow>&nbsp;</IonRow>
                                <IonRow><IonText style={{ fontWeight: "600" }} color="medium">Lorem <a color="blue" href="">ipsum dolor</a>. Nulla non urna sed velit feugiat ornare. Maecenas auctor posuere <a color="secondary" href="">ullamcorper</a>. </IonText></IonRow>
                            </IonCol>
                            <IonCol size="12" size-lg="3" className="ion-padding">
                                <IonRow><IonText><h1><IonIcon icon={happyOutline} /></h1></IonText></IonRow>
                                <IonRow><IonText className="lemon">EARN REWARDS</IonText></IonRow>
                                <IonRow>&nbsp;</IonRow>
                                <IonRow><IonText style={{ fontWeight: "600" }} color="medium">Lorem <a color="blue" href="">ipsum dolor</a> sit amet.</IonText></IonRow>
                            </IonCol>
                        </IonRow>
                        {/*WHY FINANCIAL LITERACY ROW*/}
                        <IonRow style={{paddingTop: "80px"}} className="ion-padding">
                            <IonLabel className="large-text-font" style={{fontSize: "42px", fontWeight: "500"}}>Why financial literacy? Talk about producivity, health, well-being, empowerment, enjoyment, attendance, real-life application etc.</IonLabel>
                        </IonRow>
                        <IonRow>&nbsp;</IonRow>
                        <IonRow className="ion-padding">
                            <IonButton color="blue" size="large" onClick={() => setShowModal(true)}>
                                <IonLabel className="bold-text">Get Started <IonIcon icon={arrowForwardOutline} /></IonLabel>
                            </IonButton>
                        </IonRow>
                    </IonGrid>
                    {/*FAQ QUESTIONS*/}
                    <IonList>
                        <IonItem lines="full" className="blue-item"></IonItem>
                        <IonAccordionGroup>
                            <IonAccordion value="topics" toggleIcon={addCircleOutline}>
                                <IonItem slot="header" className="blue-item">
                                    <IonLabel className="ion-text-wrap small-text-font" color="blue" style={{fontSize: "20px", fontWeight: "600"}}>What topics are included in the Wellness Center?</IonLabel>
                                </IonItem>
                                <IonList slot="content">
                                    <IonItem className="blue-item" lines="full">
                                        <IonLabel className="ion-text-wrap" style={{fontSize: "20px"}}>
                                            Proin posuere ullamcorper placerat. Mauris a felis molestie, tristique orci sit amet, sagittis ex. Etiam blandit sagittis metus eu pellentesque. Sed volutpat dolor non risus bibendum, non volutpat risus scelerisque. Pellentesque elementum eros et viverra sodales. Morbi finibus nisi sed velit euismod molestie. Nulla rutrum accumsan malesuada. Sed vitae metus augue. Praesent efficitur dolor mattis ligula hendrerit hendrerit. Integer ac turpis ultrices magna viverra laoreet. Ut at arcu arcu. Vestibulum at mi massa.
                                        </IonLabel>
                                    </IonItem>
                                </IonList>
                            </IonAccordion>
                            <IonAccordion value="literacy" toggleIcon={addCircleOutline}>
                                <IonItem slot="header" className="blue-item" lines="full">
                                    <IonLabel className="ion-text-wrap" color="blue" style={{ fontSize: "20px", fontWeight: "600" }}>Why is financial literacy important?</IonLabel>
                                </IonItem>
                                <IonList slot="content">
                                    <IonItem className="blue-item" lines="full">
                                        <IonLabel className="ion-text-wrap" style={{ fontSize: "20px" }}>
                                            Proin posuere ullamcorper placerat. Mauris a felis molestie, tristique orci sit amet, sagittis ex. Etiam blandit sagittis metus eu pellentesque. Sed volutpat dolor non risus bibendum, non volutpat risus scelerisque. Pellentesque elementum eros et viverra sodales. Morbi finibus nisi sed velit euismod molestie. Nulla rutrum accumsan malesuada. Sed vitae metus augue. Praesent efficitur dolor mattis ligula hendrerit hendrerit. Integer ac turpis ultrices magna viverra laoreet. Ut at arcu arcu. Vestibulum at mi massa.
                                        </IonLabel>
                                    </IonItem>
                                </IonList>
                            </IonAccordion>
                            <IonAccordion value="partnership" toggleIcon={addCircleOutline}>
                                <IonItem slot="header" className="blue-item">
                                    <IonLabel className="ion-text-wrap" color="blue" style={{ fontSize: "20px", fontWeight: "600" }}>What does a partnership with Banzai look like?</IonLabel>
                                </IonItem>
                                <IonList slot="content">
                                    <IonItem className="blue-item" lines="full">
                                        <IonLabel className="ion-text-wrap" style={{ fontSize: "20px" }}>
                                            Proin posuere ullamcorper placerat. Mauris a felis molestie, tristique orci sit amet, sagittis ex. Etiam blandit sagittis metus eu pellentesque. Sed volutpat dolor non risus bibendum, non volutpat risus scelerisque. Pellentesque elementum eros et viverra sodales. Morbi finibus nisi sed velit euismod molestie. Nulla rutrum accumsan malesuada. Sed vitae metus augue. Praesent efficitur dolor mattis ligula hendrerit hendrerit. Integer ac turpis ultrices magna viverra laoreet. Ut at arcu arcu. Vestibulum at mi massa.
                                        </IonLabel>
                                    </IonItem>
                                </IonList>
                            </IonAccordion>
                        </IonAccordionGroup>
                    </IonList>
                </div>
                <IonModal isOpen={showModal} onDidDismiss={() => setShowModal(false)}>
                    <ExploreContainer name="demo" />
                </IonModal>
            </IonContent>
        </IonPage>
    );
};

export default Home;
