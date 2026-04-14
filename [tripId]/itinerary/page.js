'use client';
import { useState } from 'react';
import { notFound } from 'next/navigation';
import TopNav from '../../../components/TopNav';
import CalendarGrid from '../../../components/CalendarGrid';
import PlotOutlinePanel from '../../../components/PlotOutlinePanel';
import Sidebar from '../../../components/Sidebar';
import ClipperModal from '../../../components/ClipperModal';
import { getTripById } from '../../../lib/data';

export default function ItineraryPage({ params }) {
  const trip = getTripById(params.tripId);
  if (!trip) notFound();

  const [plotOutlineOpen, setPlotOutlineOpen] = useState(false);
  const [activeSection, setActiveSection]     = useState(null);
  const [showClipper, setShowClipper]         = useState(false);

  function toggleSection(key) {
    setActiveSection(prev => prev === key ? null : key);
    setPlotOutlineOpen(false);
  }

  function togglePlotOutline() {
    setPlotOutlineOpen(prev => !prev);
    setActiveSection(null);
  }

  return (
    <div className="page-bg" style={{ padding: '28px 32px', minHeight: '100vh' }}>
      <TopNav tripName={trip.name} showItinerary />

      <div style={{ display: 'flex', gap: '18px', alignItems: 'flex-start' }}>

        {/* ── Calendar + Plot Outline ── */}
        <div style={{ display: 'flex', gap: '14px', flex: 1, minWidth: 0, alignItems: 'flex-start' }}>
          <CalendarGrid
            destinations={trip.destinations}
            events={trip.events}
            onPlusClick={togglePlotOutline}
            plotOutlineOpen={plotOutlineOpen}
          />
          {plotOutlineOpen && (
            <PlotOutlinePanel destinations={trip.destinations} />
          )}
        </div>

        {/* ── Right Sidebar ── */}
        <Sidebar
          trip={trip}
          activeSection={activeSection}
          onToggle={toggleSection}
          onSimulateClipper={() => setShowClipper(true)}
        />
      </div>

      {/* Browser Clipper Modal */}
      {showClipper && (
        <ClipperModal
          onClose={() => setShowClipper(false)}
          onSave={() => setActiveSection('restaurants')}
        />
      )}
    </div>
  );
}
