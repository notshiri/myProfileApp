import React from 'react';
import { View, Text, Image, StyleSheet, ScrollView } from 'react-native';
import { useTheme } from '@/hooks/use-theme';
import { ThemeColorKey } from '@/constants/theme';

export function ProfilePage() {
  const theme = useTheme();
  
  // Safely extract theme palette
  const colors = ('colors' in theme ? theme.colors : theme) as Record<ThemeColorKey, string>;

  return (
    <ScrollView 
      style={[styles.scrollContainer, { backgroundColor: colors.background }]} 
      showsVerticalScrollIndicator={false}
    >
      <View style={[styles.container, { backgroundColor: colors.background }]}>
        
        {/* Header Background */}
        <View style={[styles.headerBackground, { backgroundColor: colors.background, borderBottomColor: colors.border }]}>
          <Text style={[styles.welcomeHeader, { color: colors.text }]}>
            Welcome to my profile!
          </Text>

          {/* Profile Picture */}
          <View style={styles.profilePictureContainer}>
            <View style={styles.profileImageWrapper}>
              <Image
                source={require('@/assets/images/pfp.jpg')}
                style={[styles.profileImage, { borderColor: colors.primary, shadowColor: colors.primary }]}
                resizeMode="cover"
              />
              <View style={[styles.statusBadge, { borderColor: colors.background, backgroundColor: colors.accent }]}>
                <Text style={styles.statusIndicator}>●</Text>
              </View>
            </View>
          </View>

          {/* Name and Role */}
          <Text style={[styles.fullName, { color: colors.text }]}>Sheree Ann Malapajo</Text>
          <Text style={[styles.roleTitle, { color: colors.subtext }]}>4th Year BSIT Student</Text>
        </View>

        {/* Personal Introduction Card */}
        <View style={[styles.introductionCard, { backgroundColor: colors.card, borderLeftColor: colors.primary }]}>
          <Text style={[styles.sectionLabel, { color: colors.text }]}>About Me</Text>
          <Text style={[styles.introduction, { color: colors.subtext }]}>
            I'm a 4th year BS Information Technology student at Manuel S. Enverga University Foundation. Passionate about technology and always eager to learn new skills and contribute to innovative projects.
          </Text>
          
          {/* Quick Stats */}
          <View style={[styles.statsContainer, { backgroundColor: colors.secondary }]}>
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: colors.primary }]}>MSEUF</Text>
              <Text style={[styles.statLabel, { color: colors.subtext }]}>School</Text>
            </View>
            <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: colors.primary }]}>BSIT</Text>
              <Text style={[styles.statLabel, { color: colors.subtext }]}>Course</Text>
            </View>
            <View style={[styles.statDivider, { backgroundColor: colors.border }]} />
            <View style={styles.statItem}>
              <Text style={[styles.statNumber, { color: colors.primary }]}>4th</Text>
              <Text style={[styles.statLabel, { color: colors.subtext }]}>Year</Text>
            </View>
          </View>
        </View>

        {/* Interests Section */}
        <View style={[styles.interestsSection, { backgroundColor: colors.card, borderTopColor: colors.primary }]}>
          <Text style={[styles.sectionLabel, { color: colors.text }]}>My Interests</Text>
          <Text style={[styles.interestsSubtitle, { color: colors.subtext }]}>What I'm passionate about</Text>

          <View style={styles.interestGrid}>
            <View style={[styles.interestCard, { backgroundColor: colors.secondary, borderColor: colors.border }]}>
              <Text style={styles.interestIcon}>💻</Text>
              <Text style={[styles.interestCardTitle, { color: colors.text }]}>Coding</Text>
              <Text style={[styles.interestCardText, { color: colors.subtext }]}>Programming & development</Text>
            </View>

            <View style={[styles.interestCard, { backgroundColor: colors.secondary, borderColor: colors.border }]}>
              <Text style={styles.interestIcon}>🎬</Text>
              <Text style={[styles.interestCardTitle, { color: colors.text }]}>Watching</Text>
              <Text style={[styles.interestCardText, { color: colors.subtext }]}>Movies & series</Text>
            </View>

            <View style={[styles.interestCard, { backgroundColor: colors.secondary, borderColor: colors.border }]}>
              <Text style={styles.interestIcon}>🎮</Text>
              <Text style={[styles.interestCardTitle, { color: colors.text }]}>Playing</Text>
              <Text style={[styles.interestCardText, { color: colors.subtext }]}>Games & entertainment</Text>
            </View>
          </View>
        </View>

        {/* Call to Action */}
        <View style={[styles.ctaSection, { backgroundColor: colors.primary, borderColor: colors.primary, shadowColor: colors.primary }]}>
          <Text style={styles.ctaText}>Let's innovate together</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollContainer: {
    flex: 1,
  },
  container: {
    paddingBottom: 40,
  },

  // Header Section
  headerBackground: {
    paddingTop: 40,
    paddingBottom: 50,
    alignItems: 'center',
    borderBottomWidth: 1,
  },
  welcomeHeader: {
    fontSize: 32,
    fontWeight: '800',
    marginBottom: 24,
    letterSpacing: -0.5,
    textAlign: 'center',
  },

  // Profile Image
  profilePictureContainer: {
    marginBottom: 20,
    alignItems: 'center',
  },
  profileImageWrapper: {
    position: 'relative',
    width: 130,
    height: 130,
  },
  profileImage: {
    width: 130,
    height: 130,
    borderRadius: 65,
    borderWidth: 4,
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },

  // Status Indicator Badge
  statusBadge: {
    position: 'absolute',
    bottom: 4,
    right: 4,
    width: 32,
    height: 32,
    borderRadius: 16,
    borderWidth: 3,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 4,
  },
  statusIndicator: {
    fontSize: 16,
    color: '#ffffff',
    fontWeight: '700',
  },

  // Name & Role
  fullName: {
    fontSize: 26,
    fontWeight: '800',
    marginBottom: 6,
    letterSpacing: -0.3,
    textAlign: 'center',
  },
  roleTitle: {
    fontSize: 15,
    fontWeight: '600',
    letterSpacing: 0.2,
    textAlign: 'center',
  },

  // Cards & Layout
  sectionLabel: {
    fontSize: 20,
    fontWeight: '800',
    marginBottom: 8,
    letterSpacing: -0.2,
    textAlign: 'center',
  },
  introductionCard: {
    marginHorizontal: 16,
    marginVertical: 20,
    padding: 20,
    borderRadius: 16,
    borderLeftWidth: 4,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 3,
  },
  introduction: {
    fontSize: 14,
    fontWeight: '400',
    lineHeight: 22,
    letterSpacing: 0.3,
    marginBottom: 16,
    textAlign: 'center',
  },

  // Stats Grid
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    borderRadius: 12,
    paddingVertical: 14,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statNumber: {
    fontSize: 16,
    fontWeight: '700',
    marginBottom: 2,
  },
  statLabel: {
    fontSize: 11,
    fontWeight: '600',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
  },
  statDivider: {
    width: 1,
    height: 24,
  },

  // Interests Section
  interestsSection: {
    marginHorizontal: 16,
    padding: 20,
    borderRadius: 16,
    borderTopWidth: 2,
  },
  interestsSubtitle: {
    fontSize: 13,
    fontWeight: '400',
    marginBottom: 16,
    letterSpacing: 0.2,
    textAlign: 'center',
  },
  interestGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 10,
  },
  interestCard: {
    width: '48%',
    borderRadius: 12,
    padding: 16,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 110,
    borderWidth: 1,
  },
  interestIcon: {
    fontSize: 32,
    marginBottom: 8,
  },
  interestCardTitle: {
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 4,
    textAlign: 'center',
  },
  interestCardText: {
    fontSize: 11,
    fontWeight: '400',
    textAlign: 'center',
    lineHeight: 15,
  },

  // Call to Action
  ctaSection: {
    marginHorizontal: 16,
    marginTop: 24,
    marginBottom: 20,
    paddingVertical: 20,
    paddingHorizontal: 20,
    borderRadius: 16,
    alignItems: 'center',
    borderWidth: 1,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 6,
  },
  ctaText: {
    fontSize: 16,
    fontWeight: '700',
    color: '#ffffff',
    textAlign: 'center',
    letterSpacing: 0.2,
  },
});