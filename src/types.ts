export interface BranchData {
  id: string;
  branchNumber: number;
  name: string;
  color: string;
  memberCount: number;
  description: string;
  worldType: 'garden' | 'roadtrip' | 'dining' | 'city' | 'playground' | 'studio' | 'celebration';
  avatar: string;
  leader: string;
  cities: string[];
}

export interface MemoryItem {
  id: string;
  title: string;
  year: string;
  date?: string;
  branchId: string;
  people: string[];
  location: string;
  type: 'trip' | 'lebaram' | 'wedding' | 'birthday' | 'childhood' | 'chaos' | 'oldphoto';
  story: string;
  photos: string[];
  videos?: string[];
  funFact?: string;
  featured?: boolean;
}

export interface TimelineEvent {
  year: string;
  title: string;
  description: string;
  category: string;
  photos: string[];
  peopleInvolved: string[];
}

export interface FunFactItem {
  id: string;
  title: string;
  quote: string;
  category: string;
  branchId: string;
  objectType: 'camera' | 'sandal' | 'remote' | 'plate' | 'suitcase' | 'motor' | 'car' | 'food' | 'toy' | 'phone' | 'chair';
  color: string;
}

export interface CousinMember {
  id: string;
  name: string;
  branchId: string;
  branchName: string;
  avatar: string;
  funFact: string;
  childhoodPhoto: string;
  currentPhoto: string;
  dream1999: string;
  reality2026: string;
}

// Legacy compatibility aliases
export type FamilyMember = {
  id: string;
  name: string;
  role: string;
  quote: string;
  description: string;
  avatar: string;
  color: string;
  orbitRadius: number;
  orbitSpeed: number;
};

export type Milestone = {
  year: string;
  title: string;
  location: string;
  story: string;
  image: string;
  tag: string;
};

export type MemoryRoom = {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  atmosphere: string;
  items: {
    title: string;
    caption: string;
    image: string;
  }[];
};

export type LittleThing = {
  id: string;
  title: string;
  quote: string;
  iconName: string;
  color: string;
};

export type FamilyValue = {
  word: string;
  quote: string;
  detail: string;
  color: string;
};

export type GalleryPhoto = {
  id: string;
  title: string;
  date: string;
  location: string;
  caption: string;
  url: string;
  aspect: 'square' | 'portrait' | 'landscape';
};

export type FamilyData = {
  familyName: string;
  estYear: string;
  members: FamilyMember[];
  milestones: Milestone[];
  memoryRooms: MemoryRoom[];
  littleThings: LittleThing[];
  values: FamilyValue[];
  gallery: GalleryPhoto[];
};
