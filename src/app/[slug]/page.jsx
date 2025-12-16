'use client';

import serviceData from '../../service';
import Image from 'next/image';
import { notFound } from 'next/navigation';
import styles from './page.module.css';


// Convert dash-slug to the actual service key
function slugToServiceKey(slug) {
	// Manual mapping for cases where naming doesn't follow standard camelCase conversion
	const slugMap = {
		// General Services
		'comprehensive-medical-care': 'comprehensiveMedicalCare',
		'travel-logistics-support': 'travelAndLogistics',
		'administrative-coordination': 'administrativeCoordination',
		'patient-family-support': 'patientAndFamilySupport',
		'tourism-wellness-add-ons': 'tourismAndWellness',
		'financial-legal-assistance': 'financialAndLegalAssistance',
		// Treatments
		'cardiology-heart-care': 'cardiology',
		'orthopedics-spine': 'orthopedics',
		'neurology-neurosurgery': 'neurology',
		'oncology-cancer-care': 'oncology',
		'fertility-reproductive-medicine': 'fertility',
		'dental-treatments': 'dental',
		'cosmetic-plastic-surgery': 'cosmetic',
		'general-minimally-invasive-surgery': 'generalSurgery',
		'ophthalmology-eye-care': 'ophthalmology',
		'ent-ear-nose-throat': 'ent',
		'pediatrics-pediatric-surgery': 'pediatrics',
		'alternative-wellness': 'alternative',
		// Simple cases (if accessed directly)
		'cardiology': 'cardiology',
		'orthopedics': 'orthopedics',
		'neurology': 'neurology',
		'oncology': 'oncology',
		'fertility': 'fertility',
		'dental': 'dental',
		'cosmetic': 'cosmetic',
		'general-surgery': 'generalSurgery',
		'ophthalmology': 'ophthalmology',
		'ent': 'ent',
		'pediatrics': 'pediatrics',
		'alternative': 'alternative'
	};
	
	return slugMap[slug] || slug;
}

export default async function ServicePage({ params }) {
	const { slug } = await  params;
	const serviceKey = slugToServiceKey(slug);
	
	// Find the service object by serviceKey
	const serviceObj = serviceData[serviceKey];
	if (!serviceObj) return notFound();
	
	const serviceName = serviceObj.title;
	const items = serviceObj.services;

	return (
		<div style={{ padding: '2rem' }}>
			<h1
				style={{
					textTransform: 'capitalize',
					marginBottom: '2.5rem',
					fontSize: '2.8rem',
					fontWeight: 800,
					letterSpacing: '1.5px',
					color: '#4f46e5',
					textShadow: '0 4px 24px #a5b4fc',
					textAlign: 'center',
					background: 'linear-gradient(90deg, #6366f1 0%, #60a5fa 100%)',
					WebkitBackgroundClip: 'text',
					WebkitTextFillColor: 'transparent',
					lineHeight: 1.1,
				}}
			>
				{serviceName}
			</h1>
			<div className={styles.serviceContainer}>
				{/* Left Section - Image */}
				<div className={styles.imageSection} style={{ marginTop: '1rem' }}>
					{serviceObj.image && serviceObj.image.startsWith('/') && (
						<div style={{ 
							border: '1px solid #eee', 
							borderRadius: '16px', 
							overflow: 'hidden',
							boxShadow: '0 15px 35px rgba(0,0,0,0.15)',
							background: 'white'
						}}>
							<Image 
								src={serviceObj.image} 
								alt={serviceName} 
								width={500} 
								height={450} 
								style={{ 
									objectFit: 'cover', 
									width: '100%',
									height: 'auto',
									display: 'block'
								}} 
							/>
						</div>
					)}
				</div>

				{/* Right Section - Service Points */}
				<div className={styles.contentSection} style={{ 
					border: '1px solid #eee', 
					borderRadius: '12px', 
					padding: '0.75rem', 
					background: 'linear-gradient(135deg, #f8fafc 0%, #f1f5f9 100%)', 
					boxShadow: '0 10px 25px rgba(0,0,0,0.1)',
					height: 'fit-content'
				}}>
					<h2 style={{
						fontSize: '1.3rem',
						fontWeight: '700',
						color: '#1e293b',
						marginBottom: '0.75rem',
						borderBottom: '2px solid #6366f1',
						paddingBottom: '0.25rem'
					}}>
						Our Services
					</h2>
					<ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
						{items.map((service, index) => (
							<li key={index} style={{ 
								marginBottom: '0.75rem', 
								padding: '0.75rem',
								background: 'white',
								borderRadius: '8px',
								boxShadow: '0 2px 6px rgba(0,0,0,0.06)',
								borderLeft: '4px solid #6366f1',
								fontSize: '0.95rem',
								lineHeight: '1.4',
								transition: 'transform 0.2s ease, box-shadow 0.2s ease',
								cursor: 'default'
							}}
							onMouseEnter={(e) => {
								e.target.style.transform = 'translateY(-2px)';
								e.target.style.boxShadow = '0 8px 16px rgba(0,0,0,0.12)';
							}}
							onMouseLeave={(e) => {
								e.target.style.transform = 'translateY(0)';
								e.target.style.boxShadow = '0 4px 8px rgba(0,0,0,0.08)';
							}}>
								<span style={{ 
									display: 'inline-block',
									width: '8px',
									height: '8px',
									backgroundColor: '#6366f1',
									borderRadius: '50%',
									marginRight: '12px',
									verticalAlign: 'middle'
								}}></span>
								{service}
							</li>
						))}
					</ul>
				</div>
			</div>
		</div>
	);
}
